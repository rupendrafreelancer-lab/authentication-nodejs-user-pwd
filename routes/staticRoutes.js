const express = require("express");
const UrlModel = require("../models/UrlModel");

const staticRouter = express.Router();

staticRouter.get("/", async (req, res) => {
  const urls = await UrlModel.find({ createdBy: req.user?._id });

  res.render("home", {
    pageTitle: "Home Page",
    isAuthenticated: req.user,
    urls: urls,
  });
});

staticRouter.get("/signup", (req, res) => {
  res.render("signup", {
    pageTitle: "User Registration",
  });
});

staticRouter.get("/signin", (req, res) => {
  res.render("signin", {
    pageTitle: "User Login",
    error: null,
  });
});

module.exports = staticRouter;
