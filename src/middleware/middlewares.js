const jwt = require("jsonwebtoken");

const headerValidator= function(req,res,next){


    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    next()
}
module.exports.headerValidator=headerValidator

const tokenValidator= function(req,res,next){

    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "shivansh-sercetKey",(err)=>{
        if(err) return res.send({ status: false, msg: "token is invalid" })
    
      });
      if(decodedToken){
        req.decodedToken=decodedToken
        next()
      }



}
module.exports.tokenValidator=tokenValidator