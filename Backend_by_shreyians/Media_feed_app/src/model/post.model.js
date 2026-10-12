const mongoose=require("mongoose")
const postschema=new mongoose.Schema({
    image:String,
    caption:String,
})

const postmodel=mongoose.model("post",postschema)
// database meinkhii trike ka data ho skta hai like post,user etc..
// har alag trike ke data to store krne ke liye alg collection bnate hai hm 
// to abhi post ke related info ke liye post naam ka collection bna rhe hai .


module.exports=postmodel;
