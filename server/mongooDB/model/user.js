import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  role: String,
  userName: String,
  password: String,
});

export const User = mongoose.model("User", userSchema);
