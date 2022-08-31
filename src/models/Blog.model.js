const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    Title: String,
    Body: String,
    cDate: String,
    uDate: String,
  },
  { collection: "blog" }
);

const blogModel = model("blogModel", blogSchema, "blog");

module.exports = { blogModel };
