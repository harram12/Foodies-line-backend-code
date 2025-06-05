const mongoose=require("mongoose")
const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
   
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    yourchoice  :{
        type:String,
        required:true
    }


});
const User=new mongoose.model("user",UserSchema);
module.exports=User