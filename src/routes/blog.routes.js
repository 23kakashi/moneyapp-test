const { Router } = require("express");
const { createBlog, getAllBlog } = require("../controller/blog.controller");

const blogRouter = Router();

// create new blog
blogRouter.post("/create", async (req, res) => {
  const { Title, Body } = req.body;
  const { message, status } = await createBlog(Title, Body);
  if (status === "error") {
    return res.status(404).send({ message, status });
  }
  return res.status(201).send({ message, status });
});

//get all blogs
blogRouter.get("/", async (req, res) => {
  const { message, status, data } = await getAllBlog();
  if (status === "error") {
    return res.status(404).send({ message, status });
  }
  return res.status(201).send({ message, status, data });
});

module.exports = { blogRouter };
