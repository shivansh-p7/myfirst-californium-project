const jwt = require("jsonwebtoken");

const headerValidator = function (req, res, next) {
 try{ let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

  next()
}
catch(error){
  return res.status(500).send({error:error.message})
}}
module.exports.headerValidator = headerValidator

const tokenValidator = function (req, res, next) {

  try {
    let decodedToken = jwt.verify(req.headers["x-auth-token"], "shivansh-sercetKey");
if(!decodedToken)
  {req.decodedToken = decodedToken
  next()
}else{
  res.send({msg:"invalid token"})
}

  }
  catch (error) {
    res.status(500).send({ msg: "error", error: error })
  }



}
module.exports.tokenValidator = tokenValidator

const authorization = function (req, res, next) {
 try {if (req.params.userId != req.decodedToken.userId) {
    return res.status(403).send({ msg: "invalid request" })
  }

  next()
}
catch(error){
  return res.status(500).send({error:error.message})
}
}
module.exports.authorization = authorization