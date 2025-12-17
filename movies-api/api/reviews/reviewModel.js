import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  movieId: Number,
  author: String,
  content: String,
});

export default mongoose.model("Review", ReviewSchema);