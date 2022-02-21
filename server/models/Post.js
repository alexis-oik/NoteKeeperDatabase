import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  content: String,
});

const posts = mongoose.model("Post", postSchema);

export default posts;
