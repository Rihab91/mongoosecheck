const mongoose=require("mongoose")
// Define the Person Schema
const PersonSchema= mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number},
    favoriteFoods:{type:[String],default:[]},
})
// Create the Person Model
const Person=mongoose.model('Person',PersonSchema)
module.exports=Person