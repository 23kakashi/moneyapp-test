const { reviewModel } = require("../models/Review.model");
const { getDate } = require("../Auxiliary/date.auxiliary");

const createReview = async (id, description) => {
  try {
    let date = getDate();

    const review = {
      userId: id,
      description,
      cDate: date,
      uDate: date,
    };
    const newReview = await reviewModel(review);
    newReview.save();

    return { message: "review created successfully", status: "success" };
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

const deleteReview = async (id) => {
  try {
    await reviewModel.findOneAndDelete({ _id: id });
    return {
      message: "review deleted successfully",
      status: "success",
    };
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

module.exports = { createReview, deleteReview };
