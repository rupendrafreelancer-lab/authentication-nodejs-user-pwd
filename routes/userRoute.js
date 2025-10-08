const express = require("express");
const { UserSignup, UserSignin } = require("../controllers/UserController");

const userRoute = express.Router();

userRoute.post("/", UserSignup);
userRoute.post("/login", UserSignin);

module.exports = userRoute;
