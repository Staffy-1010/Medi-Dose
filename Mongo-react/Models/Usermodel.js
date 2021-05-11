
var mongoose=require("mongoose");

function getUserModel()
{
    var UserSchema=new mongoose.Schema({
        uid : String,
        pwd : String,
        mob : String,
        pic : String,
        dos : {type:Date,default:Date.now }
    });
    var userModel=mongoose.model("project",UserSchema);
    return userModel;
}
module.exports=getUserModel;