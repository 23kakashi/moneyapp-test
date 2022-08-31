const { Router } = require("express");
const {
  createReview,
  deleteReview,
} = require("../controller/review.controller");

const reviewRouter = Router();

// create a review
reviewRouter.post("/", async (req, res) => {
  const { description } = req.body;
  const { blogid: id } = req.query;
  const { message, status } = await createReview(id, description);
  if (status === "error") {
    return res.status(404).send({ message, status });
  }
  return res.status(200).send({ message, status });
});

// delete a review
reviewRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { message, status } = await deleteReview(id);
  if (status === "error") {
    return res.status(404).send({ message, status });
  }
  return res.status(200).send({ message, status });
});

module.exports = { reviewRouter };
