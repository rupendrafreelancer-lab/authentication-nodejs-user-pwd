const shortid = require("shortid");
const UrlModel = require("../models/UrlModel");

const getAllUrls = async (req, res) => {
  const urls = await UrlModel.find({ createdBy: req.user?._id });
  return res.status(201).send({ status: "OK", data: urls });
};

const createUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).send({ status: "Error", error: "Url is mandatory" });
  const shortId = shortid.generate();

  const url = await UrlModel.create({ shortId: shortId, redirectURL: body.url, visitorClicks: [], createdBy: req.user._id });

  // return res.status(201).send({ status: "OK", shortId: url.shortId });
  return res.redirect("/");
};

const getUrlById = async (req, res) => {
  const shortId = req.params.id;
  const url = await UrlModel.findOne({ shortId });

  if (!url) return res.render("notfound", { error: "Short url not found" });

  return res.redirect(url.redirectURL);
};
const updateUrlById = async (req, res) => {};
const deleteUrlById = async (req, res) => {};

module.exports = {
  getAllUrls,
  createUrl,
  getUrlById,
  updateUrlById,
  deleteUrlById,
};
