const express = require('express');
const router = express.Router();

const employee = require('./employee')
const _ = require('underscore')

const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');


router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})
const players=[
    {
        "name":"Rohit",
        "dob":"1/4/1990",
        "gender": "Male",
        "city": "Mumbai",
        "sports":[ "Cricket"]
    },
    {
        "name":"Sanya",
        "dob":"18/5/1988",
        "gender": "Female",
        "city": "Delhi",
        "sports":[ "Tennis"]
    },
    {
        "name":"Virat",
        "dob":"23/9/1993",
        "gender": "Male",
        "city": "Delhi",
        "sports":[ "Cricket"]
    },
    {
        "name":"sunil chetri",
        "dob":"17/6/1995",
        "gender": "Male",
        "city": "pune",
        "sports":[ "Socer"]
    },
    {
        "name":"PV sindhu",
        "dob":"12/3/1991",
        "gender": "female",
        "city": "Gurgaon",
        "sports":[ "Badminton"]
    }


];

router.post("/player",function(req,res){
    let addedplayer=req.body.data.name
 let playerExist=false
    for(let i=0;i<players.length;i++){
       
        if(players[i].name===addedplayer){
                 playerExist=true

        }
    }
    if(playerExist){
     return  res.send("player already exist with this name")
    }else{
         players.push(req.body.data)
    }
    
    res.send({data:players, status:true})
})



module.exports = router;