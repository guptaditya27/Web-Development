// server ko start krna is main work of this file 
const app=require("./src/app") // jis file ko require kr rha hu aur woh file jo bhi export kr rhi hai woh cheez yhaa app mein aa jyegi .
const connectdb=require("./src/db/db")
connectdb()

app.listen(3000,()=>{
    console.log("App started successfully ...")
})
// jab bhi server start hota hai to yeh call back khud se execute ho jata hai .



// moongose is the tool used to connect our server to database
// create kis traha krna hai db se is written in db.js from where we are exporting refn to connect 
//and calling to connect in our server.js file

// ab database mein schema create krna pdega btana pdega ki jo data ham store krege woh kaisa dikhega 

