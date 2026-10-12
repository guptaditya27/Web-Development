require("dotenv").config()
const mongoose=require("mongoose")

function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Server Database connected")
    })

    .catch(()=>{
        console.log("Error Connecting to Db")
        process.exit(1);
        // server band kr dega yeh 
    })
}
module.exports=connectDB;