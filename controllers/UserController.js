const { v4: uuidv4 } = require("uuid");
const UserModel = require("../models/UserModel");
const { setUser } = require("../services/AuthService");

const UserSignup = async (req, res) => {
  const { name, email, password } = req.body;

  await UserModel.create({ name, email, password });

  return res.render("home", {
    pageTitle: "Home Page",
    withSignup: true,
  });
};

const UserSignin = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email, password });

  if (!user) {
    return res.render("signin", {
      pageTitle: "Login Page",
      error: "Invalid Username or Password",
    });
  }

  const sessionId = uuidv4();
  setUser(sessionId, user);

  res.cookie("uid", sessionId);

  return res.redirect("/");
};

module.exports = {
  UserSignup,
  UserSignin,
};
