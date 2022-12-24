const customerModel = require("../models/customerModel");

const mid1=function(req,res,next){
    let body=req.body;
    let {customerID}=body;
    if(!customerID){
    res.send({message:"customerID is mandatory"});
    }else{
        next();
    };
};

module.exports.mid1=mid1;

const mid2= async function(req,res,next){
    let body=req.body.customerID;
    let customerData=  await customerModel.findOne({_id:body});//default id created by mongoDB
    if(!customerData){
        res.send({message:"enter a valid customerID"})
    }else{
        next();
    };

};
module.exports.mid2=mid2;