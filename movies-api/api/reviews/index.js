import express from "express";
import Review from "./reviewModel";

const router = express.Router();

// GET all reviews
router.get("/", async (req, res) => {
  const reviews = await Review.find();
  res.status(200).json(reviews);
});

// GET reviews for a specific movie
router.get("/movie/:id", async (req, res) => {
  const reviews = await Review.find({
    movieId: Number(req.params.id),
  });
  res.status(200).json(reviews);
});

// POST a new review
router.post("/", async (req, res) => {
  const review = await Review.create(req.body);
  res.status(201).json(review);
});

// DELETE a review by ID
router.delete("/:id", async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;