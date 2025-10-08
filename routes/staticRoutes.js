const express = require("express");
const UrlModel = require("../models/UrlModel");

const staticRouter = express.Router();

staticRouter.get("/", async (req, res) => {
  const urls = await UrlModel.find({ createdBy: req.user?._id });

  res.render("home", {
    isAuthenticated: req.user,
    urls: urls,
  });
});

staticRouter.get("/signup", (req, res) => {
  res.render("signup");
});

staticRouter.get("/signin", (req, res) => {
  res.render("signin", {
    error: null,
  });
});

staticRouter.get("/signout", (req, res) => {
  res.redirect("/");
});

module.exports = staticRouter;
