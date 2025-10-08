const { default: mongoose } = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
    },
    redirectURL: {
      type: String,
      required: true,
      unique: true,
    },
    visitorClicks: [{ timestampe: { type: Number } }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const UrlModel = mongoose.model("url", urlSchema);

module.exports = UrlModel;
