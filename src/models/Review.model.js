const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    //usesId => blogId
    userId: Schema.Types.ObjectId,
    description: String,
    cDate: String,
    uDate: String,
  },
  { collection: "review" }
);

const reviewModel = model("reviewModel", reviewSchema, "review");

module.exports = { reviewModel };
