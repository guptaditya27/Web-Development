// iss file mein mongoose ka use krke ham databaase and server ka connection krvayege

const mongoose=require("mongoose");

async function connectdb() {
    await mongoose.connect("mongodb+srv://adgupta285_db_user:sRp3lopBcdkX8daM@cluster1.yh8gdn1.mongodb.net/halley");
    // halley hamare datatbase ka naam hai jo hum create krege in future.
    // agr db exist nhi krta mongoose.connect() usey create kr deti hai 


    console.log("connected to DB");

}
module.exports=connectdb; // exporting refrence of fn