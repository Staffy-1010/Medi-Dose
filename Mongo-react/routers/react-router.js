var express=require("express");
var path=require("path");
const mongoose = require('mongoose');

var app=express.Router();
app.use(express.urlencoded({ extended:true }));


//=----------
var userController=require(path.join(__dirname,"..","Controllers","UserController.js"));
var profileController=require(path.join(__dirname,"..","Controllers","ProfileController.js"));

app.post("/savee",userController.Signup);
app.post("/findd",userController.Login);
app.post("/submit",profileController.submit);
app.post("/update",profileController.Update);
module.exports=app;