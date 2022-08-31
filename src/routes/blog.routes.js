const { Router } = require("express");
const {
  createBlog,
  getAllBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blog.controller");

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
  return res.status(200).send({ message, status, data });
});

//get single blog
blogRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const { message, status, data } = await getBlog(id);

  if (status === "error") {
    return res.status(404).send({ message, status });
  }
  return res.status(200).send({ message, status, data });
});

// update a blog
blogRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { Title, Body } = req.body;

  const { message, status } = await updateBlog(id, Title, Body);

  if (status === "error") {
    return res.status(404).send({ message, status });
  }
  return res.status(200).send({ message, status });
});

// delete a blog
blogRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { message, status, data } = await deleteBlog(id);
  if (status === "error") {
    return res.status(404).send({ message, status });
  }
  return res.status(200).send({ message, status });
});

module.exports = { blogRouter };
