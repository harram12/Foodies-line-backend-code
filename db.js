const  mongoose=require("mongoose")
const url="mongodb://localhost:27017/Foodies-line";
const ConnectDB=async()=>{
   await mongoose.connect(url)
   .then(()=>{
    console.log("connected successfully")
   })
   .catch(error =>console.log("error while connected",error)
   
   );
   
}
module.exports=ConnectDB