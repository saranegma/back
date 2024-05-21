const express=require('express')
const router=express.Router()
const Event=require('../models/event')


//create new event
router.post('/createEvent',(req,res)=>{
    const {title, type,description,location,date,time}=req.body
    const event=new Event({title, type,description,location,date,time})
    event.save()
    .then(savedEvent=>res.status(201).json({message:"okay"}))
    .catch(err=>res.status(400).json({error:err.message}))



    
})
//retrive all events
router.get('/',(req,res)=>{
Event.find().then(events=>res.json(events))
.catch(err=>res.status(500).json({error:err.message}))
})

















module.exports=router