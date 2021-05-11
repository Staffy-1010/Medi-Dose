var express=require("express");
var usermodel=require("../Models/Medmodal.js");
var app=express();
var userModel=usermodel();
var SaveMed=async (req,resp)=>{
    console.log(JSON.stringify(req.body)); //in json format
//     console.log("*********");
//     // console.log(req.files.myfile.name);
//     console.log("*********");

//    if(req.files==null) //no pic uploaded
//         req.body.ppic="nopic.jpg";
//     else
//        { req.body.ppic=req.files.myfile.name;

//         var fullPath=path.join(__dirname,"..","uploads",req.body.ppic);
// //----------------------------------------------

// //saving file to uploads folder
//         await req.files.myfile.mv(fullPath,(err)=>{
//         if(err)
//             {
//                 console.log(err.message);
//             }
//             else
//             {
//                  console.log("File moved...");
//                  }
//       })
//     }

// //--------------------
//     await userModel.create(req.body,(err,result)=>{
//         if(err)
//         {
//             resp.send(err);
//             return;
//         }
//         resp.set("json");
//         resp.json({"msg":" Record Inserted with pic...."});
//         console.log(result);
//     });
    
// }    
        
    // await userModel.create(req.body,(err,result)=>{
    //     if(err){
    //     resp.send(err);
    //     return;}
    //     resp.send("YOUR MEDICINE IS NOW AVAILABLE");

//     let samplefile;
//     //samplefile=req.files.ppic;
//     console.log(req.files);
//     console.log("***************");
    
//     if(req.files==null)
//     {
//         req.body.picname="nopic.jpg";
//         resp.end("No file Selected...");
//     }
// else
//     {
//         req.body.picname=req.files.filee.name;  //g.jpg

//     var fullPath=path.join(process.cwd(),"uploads",req.body.picname);
//     req.files.filee.mv(fullPath,(err)=>{
//        if(err)
//             {
//                 console.log(err.message);
//                 return resp.status(500).send(err);
//             }
//             else
//             {
//                  console.log("File moved...");
//                  resp.json({msg:"File Uploaded"});
//                 //resp.end("File Uploaded successfully for User:"+req.body.uid+"  Filename="+req.body.picname);
//             }
//       })
//     }
}



// }

function doDelete(req,resp)
{
    console.log(req.body.name);
    userModel.remove({name:req.body.name}).then((result)=>
    {
        console.log(result);
        if(result.deletedCount!=0)
        resp.json({msg:"Deleted"});
        else
        resp.json({msg:"Invalid id"});
    });
}   
var doFetchAll=(req,resp)=>{
    userModel.find()
    .then((result)=>{
        resp.json(result);
    })
    .catch((err)=>{
        resp.json({errmsg:err});
    })
}
module.exports={SaveMed,doFetchAll,doDelete}