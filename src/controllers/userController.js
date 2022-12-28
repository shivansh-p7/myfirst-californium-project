const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let userData = await userModel.create(data);
  res.send({ msg: userData });
};

const loginUser = async function (req, res) {
  let emailId = req.body.emailId;
  let password = req.body.password;
  let userDetails = await userModel.findOne({ emailId: emailId, password: password });
  if (!userDetails)
    return res.send({ status: false, msg: "username or the password is not corerct", });
  let token = jwt.sign(
    {
      userId: emailId._id,
      batch: "califormium",
      organisation: "FunctionUp",
    },
    "shivansh-sercetKey"
  );
  //res.setHeader("x-auth-token", token);
 return  res.send({ status: true, token: token });
};

const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails) return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
  
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails) {
    return res.send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};



const deleteuser=async function(req,res){

let userId=req.params.userId
let deletedDetails= await userModel.findOneAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true})
return res.send({status:true,data:deletedDetails})

}
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteuser=deleteuser;
