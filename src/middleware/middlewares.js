const jwt = require("jsonwebtoken");

const headerValidator= function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });

    next()
}
module.exports.headerValidator=headerValidator

const tokenValidator= function(req,res,next){
    let decodedToken = jwt.verify(req.headers["x-auth-token"], "shivansh-sercetKey");
    
      if(decodedToken){
        req.decodedToken=decodedToken
        next()
      }else{
        return res.send({msg:"invalid token"})
      }



}
module.exports.tokenValidator=tokenValidator

const authorization= function(req,res,next){
if(req.params.userId!=req.decodedToken.userId){
   return res.send({msg: "invalid request"})
  }

 next()
}
module.exports.authorization=authorization