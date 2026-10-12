require("dotenv").config()

const app=require("./src/app")
const connectDb=require("./src/db/db")

async function startServer() {
    await connectDb();
    app.listen(3000,()=>{
        console.log("server is Running of posts app")
    })
}

startServer().catch((error) => {
    console.error("Failed to start server:", error);
    process.exitCode = 1;
});
//