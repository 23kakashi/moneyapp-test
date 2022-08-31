const { reviewModel } = require("../models/Review.model");

const getPatient = async () => {
  try {
    return { message: "User created successfully", status: "success" };
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

module.exports = {};
