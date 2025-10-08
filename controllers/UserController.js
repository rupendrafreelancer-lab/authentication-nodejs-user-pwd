const UserModel = require("../models/UserModel");
const { setUser } = require("../services/AuthService");

const UserSignup = async (req, res) => {
  const { name, email, password } = req.body;

  await UserModel.create({ name, email, password });

  return res.render("home");
};

const UserSignin = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email, password });

  if (!user) {
    return res.render("signin", {
      error: "Invalid Username or Password",
    });
  }

  const token = setUser(user);
  res.cookie("uid", token);

  return res.redirect("/");
};

module.exports = {
  UserSignup,
  UserSignin,
};
