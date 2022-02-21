import mongoose from "mongoose";
import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const foundPosts = await Post.find();
    res.status(200).json(foundPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deletePosts = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("That note doesnt exist");

  await Post.findByIdAndRemove(id);

  res.json({ message: "Note deleted Successfully" });
};
