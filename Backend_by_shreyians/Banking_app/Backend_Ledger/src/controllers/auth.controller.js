const usermodel=require("../models/user.model")
const jwt=require("jsonwebtoken")
const emailService=require("../services/email.service")
/** 
* - user register controller
* - post /api/auth/register
*/


async function userRegisterController(req,res){
    const {email,password,name}=req.body
    const isExists=await usermodel.findOne({
        email:email
    })
    if(isExists){
        return res.status(422).json({
            message:"Email Already Exist",
            status:"failed"
        })
    }
    const user= await usermodel.create({
        email,password,name
    })
    const token=jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,{expiresIn:"3d"}
    )
    // needs payload and private key 
    // token need to be set in cookie module used is cookieparser
    // jwt token stores in cookie #ifkyk haha aha !!
    res.cookie("token",token);
    (res.status(201).json({
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
      },
      token,
    }),
    await emailService.sendRegistrationEmail(user.email, user.name));
}
/**
 * -User Login Controller
 * -Post /api/auth/login
 */
async function userLoginController(req,res){
    const {email,password}=req.body

    const user=await usermodel.findOne({email}).select("+password")
    // by default password nahi aarha tha isliye extra likh pada yeh # security feature implemented by us.
    if(!user){
        return res.status(401).json({
            message:"Invalid Email Id Entered"
        })
    }
    const isValidPassword= await user.comparePassword(password)

    if(!isValidPassword){
        return res.status(401).json({
            message:"Invalid Email or Password"
        })
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '3d',
    });
    res.cookie('token', token);
    res.status(200).json({
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
      },
      token,
    })
    

}







module.exports={
    userRegisterController,
    userLoginController
}


