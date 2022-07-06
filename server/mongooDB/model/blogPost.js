import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  article: String,
});

export const BlogPost = mongoose.model("BlogPost", blogPostSchema);
