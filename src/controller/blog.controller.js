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
    return { message: "something went wrong", status: "error" };
  }
};

const getAllBlog = async () => {
  try {
    const blog = await blogModel.find();
    return {
      message: "all blog found",
      status: "success",
      data: blog,
    };
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

const getBlog = async (id) => {
  try {
    const blog = await blogModel.find({ _id: id });

    if (blog.length === 0) {
      return {
        message: "No blog with this id exits",
        status: "success",
        data: blog,
      };
    }
    return {
      message: "blog found",
      status: "success",
      data: blog,
    };
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

const updateBlog = async (id, Title, Body) => {
  try {
    const blog = await blogModel.findOne({ _id: id });

    if (blog === null) {
      return {
        message: "No blog with this id exits",
        status: "success",
      };
    }

    let date = getDate();
    await blogModel.updateOne({ _id: id }, { Title, Body, uDate: date });

    return {
      message: "blog updated successfully",
      status: "success",
    };
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

const deleteBlog = async (id) => {
  try {
    await blogModel.findByIdAndDelete({ id });
    return {
      message: "blog deleted successfully",
      status: "success",
    };
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

module.exports = { createBlog, getAllBlog, getBlog, updateBlog, deleteBlog };
