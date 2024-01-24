const express = require('express')
const router=express.Router()

const {CreatePerson,GetPerson,UpdatePerson,DeletePerson,FindonePerson,FindPersonById}=require('../controllers/FoodControllers')
const Person=require("../models/PersonSchema")
router.post('/create',CreatePerson)
router.get('/getall',GetPerson)
router.put('/update:a',UpdatePerson)
router.delete('/delete:a',DeletePerson)
router.put('/findone :a',FindonePerson)
router.put('/findbyid :a',FindPersonById)
module.exports=router