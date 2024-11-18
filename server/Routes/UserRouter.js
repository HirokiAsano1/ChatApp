const express = require("express")
const {registerUser,loginUser,findUser,getUser} = require("../Controllers/userController")


const router = express.Router();

router.get("/find/:userId",findUser)
router.get("/",getUser)
router.post("/register",registerUser)
router.post("/login",loginUser)





module.exports = router;