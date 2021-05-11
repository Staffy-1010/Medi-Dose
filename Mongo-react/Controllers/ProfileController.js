var express=require("express");
var usermodel=require("../Models/Profilemodel.js");
var app=express();
var userModel=usermodel();
var submit=async (req,resp)=>{
    await userModel.create(req.body,(err,result)=>{
        if(err){
        resp.send(err);
        return;}
        resp.send("Heyy there!! WELCOMEE");
}) 
}   
var Update=(req,resp)=>
{
    userModel.update({uid:req.body.uid},{$set:{name:req.body.name,Email:req.body.Email,city:req.body.city,address:req.body.address}}).then(function(result)
    {
        console.log(result);
              if(result.nModified!=0)
                resp.json({msg:"Updated"});
               else
               resp.json({msg:"Invalid id"});
        
    });
}
module.exports={submit,Update}