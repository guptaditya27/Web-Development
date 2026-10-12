const express = require('express');
const authRouter=require("../src/routes/auth.routes")
const cookieparser=require("cookie-parser")

const app = express();
// middleware taaki express json ko padh skee.
app.use(express.json())
app.use(cookieparser())
app.use("/api/auth",authRouter)
module.exports = app;
