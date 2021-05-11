var express=require("express");
var usermodel=require("../Models/Usermodel.js");
var app=express();
var userModel=usermodel();
var Signup=async (req,resp)=>{
    await userModel.create(req.body,(err,result)=>{
{
    console.log(JSON.stringify(req.body));
    console.log("*********");
    console.log(req.files);
    console.log("*********");

   if(req.files==null)
        req.body.ppic="nopic.jpg";
    else
       { req.body.ppic=req.files.myfile.name;

        var fullPath=path.join(__dirname,"..","uploads",req.body.ppic);
//----------------------------------------------

      req.files.myfile.mv(fullPath,(err)=>{
        if(err)
            {
                console.log(err.message);
                //return resp.status(500).send(err);
            }
            else
            {
                 console.log("File moved...");
                 //resp.json({msg:"File Uploaded"});
                //resp.end("File Uploaded successfully for User:"+req.body.uid+"  Filename="+req.body.picname);
            }
      })
      
        if(err){
        resp.send(err);
        return;}
        resp.send("YOU ARE SUCCESSFULLY SIGNED UP");
        }
    }
}) 
}   

var Login=async (req,resp)=>{

    await userModel.find({uid:req.body.uid,pwd:req.body.pwd},(err,result)=>{
           if(err){
           resp.send(err);
           return;}
           if(result=="")
           resp.send("PLEASE SIGNUP");
           else{
           resp.send("YOU ARE SUCCESSFULLY LOGGED IN");
           }
        }
    )    
}


module.exports={Signup,Login}