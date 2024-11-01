const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const userRoute = require("./Routes/UserRouter")

const app = express()
require("dotenv").config()

app.use(express.json())
app.use(cors())
app.use("/api/user", userRoute);


const port = 5000;
app.listen(port,(req,res)=>{
    console.log(`Server Running on port : ${port}`);
});
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{}).then(()=>console.log("MongoDb connection established"))
.catch((error) => console.log("MongoDB Failed:",error.message));