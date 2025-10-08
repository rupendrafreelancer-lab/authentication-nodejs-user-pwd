const express = require("express");
const { getAllUrls, createUrl, getUrlById, updateUrlById, deleteUrlById } = require("../controllers/UrlController");

const urlRoute = express.Router();

urlRoute.get("/", getAllUrls);

urlRoute.post("/", createUrl);

urlRoute.get("/:id", getUrlById);

urlRoute.patch("/:id", updateUrlById);

urlRoute.delete("/:id", deleteUrlById);

module.exports = urlRoute;
