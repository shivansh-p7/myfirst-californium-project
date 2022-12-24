const { AsyncLocalStorage } = require("async_hooks");
const customerModel=require("../models/customerModel");


const createCustomer= async function(req,res){
    const body=req.body;
    const customerData=await customerModel.create(body);
    res.send({data:customerData})
};
module.exports.createCustomer=createCustomer;

const getCustomer= async function(req,res){
    const customerData=await customerModel.find();
    res.send({data:customerData})
};
module.exports.getCustomer=getCustomer;

const updateCustomer= async function(req,res){
    const updateData=await customerModel.updateMany();
    res.send({data:updateData})
};
module.exports.updateCustomer=updateCustomer;

const deleteCustomer= async function(req,res){
    const deleteData=await customerModel.updateOne();// change the isDeleted field to true to remove data
    res.send({data:updatedDetails})
};
module.exports.deleteCustomer=deleteCustomer;

