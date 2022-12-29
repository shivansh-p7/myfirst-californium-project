const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    let userData = await userModel.create(data);
    res.status(201).send({ msg: userData });
  }
  catch (error) {
    res.status(500).send({ msg: error, error: error.message })
  }
};

const loginUser = async function (req, res) {
  try{let emailId = req.body.emailId;
  let password = req.body.password;
  let userDetails = await userModel.findOne({ emailId: emailId, password: password });
  if (!userDetails)
    return res.status(400).send({ status: false, msg: "username or the password is not corerct", });
  let token = jwt.sign(
    {
      userId: userDetails._id.toString(),
      batch: "califormium",
      organisation: "FunctionUp",
    },
    "shivansh-sercetKey"
  );
  res.setHeader("x-auth-token", token);
  return res.status(200).send({ status: true })}
  catch(error){
    return res.status(500).send({error:error.message})
  }

};

const getUserData = async function (req, res) {
try{  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails) return res.status(400).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });}
catch(error){
  return res.status(500).send({error:error.message})
}
};

const updateUser = async function (req, res) {
try{  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails) {
    return res.status(400).send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(200).send({ status: updatedUser, data: updatedUser });}
  catch(error){
    return res.status(500).send({error:error.message})
  }
};



const deleteuser = async function (req, res) {

  try{let userId = req.params.userId
  let deletedDetails = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true })
  return res.status(200).send({ status: true, data: deletedDetails })}
  catch(error){
    return res.status(500).send({error:error.message})
  }
}
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteuser = deleteuser;
