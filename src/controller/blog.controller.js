const { blogModel } = require("../models/Blog.model");
const { getDate } = require("../Auxiliary/date.auxiliary");

const createBlog = async (Title, Body) => {
  try {
    let date = getDate();
    const blog = {
      Title,
      Body,
      cDate: date,
      uDate: date,
    };
    const newBlog = new blogModel(blog);
    newBlog.save();
    return { message: "blog created successfully", status: "success" };
  } catch (err) {
    console.error(err);
    return { message: "something went wrong", status: "error" };
  }
};

const getAllBlog = async () => {
  try {
    const blog = await blogModel.find();
    return {
      message: "blog created successfully",
      status: "success",
      data: blog,
    };
  } catch (err) {
    console.error(err);
    return { message: "something went wrong", status: "error" };
  }
};

module.exports = { createBlog, getAllBlog };
