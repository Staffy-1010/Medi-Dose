
var mongoose=require("mongoose");

function getMedModel()
{
    var UserSchema=new mongoose.Schema({
        name:String,
        comp:String,
        exp:String,
        quan:String,
        ppic:String,
        typ:String
        });
    var medModel=mongoose.model("medicine",UserSchema);
    return medModel;
}
module.exports=getMedModel;