const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const { blogRouter } = require("./src/routes/blog.routes");
const { reviewRouter } = require("./src/routes/review.routes");

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
    SameSite: "none",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/blog", blogRouter);
app.use("/review", reviewRouter);

const PORT = process.env.PORT || 8080;
const mongoDB = process.env.MongoAtlas;

app.listen(PORT, async () => {
  mongoose
    .connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection successful to server");
    })
    .catch((err) => {
      console.log(err, "Failed to connect to server");
    });
  console.log(`Listening on Port ${PORT}`);
});
