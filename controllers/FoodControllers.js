const Person=require('../models/PersonSchema')

const CreatePerson=async(req,res)=>{
    try {
    const newperson= await Person.create(req.body)
    res.status(201).json()
    }catch (err){
    res.status(500).json({msg:"something wen wrong" , err})
    }}
const GetPerson=async(req,res)=>{
    try {
      
         const getperson= await Person.find()
         res.status(200).json({msg:'Get all Person',person:getperson})
        }catch (err){
        res.status(500).json({msg:"something wen wrong" , err})
        }}    

// Find a person by Name and Perform New Updates
const UpdatePerson=async(req,res)=>{
    try {

        const updateperson= await Person.findByIdAndUpdate({name:req.params.a},req.body,{new:true})
        res.status(200).json({msg:"person will be update",person:updateperson})
    } catch (error) {
       res.status(500).json({msg:"something wen wrong",err}) 
    }
} 
// Find just one person
const FindonePerson=async(req,res)=>{
    try {
        const {name,age,favoriteFoods}=req.body
        const findonePerson= await Person.findOne({favoriteFoods:req.params.a},req.body,{new:true})
        res.status(200).json({msg:" this person have a food :",person:findonePerson})
    } catch (error) {
       res.status(500).json({msg:"something wen wrong",err}) 
    }
} 
//  to Search  Database By _id
const FindPersonById=async(req,res)=>{
    try {
        const findPersonById= await Person.findPersonById({_id:req.params.a},req.body,{new:true})
        res.status(200).json({msg:" this person is :",person:findPersonById})
    } catch (error) {
       res.status(500).json({msg:"something wen wrong",err}) 
    }
} 

// Delete one person by the person's _id.
const DeletePerson=async(req,res)=>{
    try {
       const deleteperson=await Person.findByIdAndDelete({_id:req.params.a},req.body) 
       res.status(200).json({msg:"person was deleted",person:deleteperson})
    } catch (error) {
        res.status(500).json({msg:"something wen wrong",err})
        
    }
}   
module.exports={CreatePerson,GetPerson,UpdatePerson,DeletePerson,FindonePerson,FindPersonById}