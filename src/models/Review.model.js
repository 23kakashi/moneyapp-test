const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    name: String,
    email: String,
    salt: String,
    hash: String,
  },
  { collection: "review" }
);

const reviewModel = model("reviewModel", reviewSchema, "review");

module.exports = { reviewModel };
