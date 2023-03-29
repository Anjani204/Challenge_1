const express=require("express");
const mongoose=require("mongoose");
const app=express()
mongoose.connect("mongodb://localhost:27017/latestdb",{
    useNewUrlParser:true,useUnifiedTopology:true

});

app.listen(3000,()=>{
    console.log("on port 3000");
})