const express=require("express");
const ConnectDB=require("./Utils/db");
const UserRouter=require("./Routes/UserRoutes");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const port=5000;

// connectDB
ConnectDB();
// middlewave
app.use(bodyParser.json());
app.use(cors())
// UserRouter
app.use("/" ,UserRouter);

app.get("/" ,(req,res)=>{
    res.send("welcome");
});
app.listen(port,()=>{
    console.log("app is running on ",port)
});