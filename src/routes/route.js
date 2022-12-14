const express = require('express');
const router = express.Router();



let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
router.post("/voting",function(req,res){
    let input=req.query.votingAge;
    let eligiblePeople=persons.filter(x=>{
        if(x.age>input){
        x.votingStatus=true;
           return true
        };
    
    });
    return res.send({data:eligiblePeople,status:true})
}) 

module.exports = router;