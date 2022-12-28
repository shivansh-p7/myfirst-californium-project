const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require('../middleware/middlewares')



router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleware.headerValidator,middleware.tokenValidator, userController.getUserData)

router.put("/users/:userId",middleware.headerValidator,middleware.tokenValidator, userController.updateUser)
router.delete("/users/:userId",middleware.headerValidator,middleware.tokenValidator, userController.deleteuser)


module.exports = router;