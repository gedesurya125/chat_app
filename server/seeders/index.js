import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

// Data
import { addNewUsers, removeUsers } from "./user";
import { addNewBlogPosts, removeBlogPosts } from "./blogPost";
dotenv.config({
  path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`),
});

// seeders add
const add = async () => {
  await addNewUsers();
  await addNewBlogPosts();
  // add other add seeders here
};

// seeders remove
const remove = async () => {
  await removeUsers();
  await removeBlogPosts();
  // add other remove seeders here
};

// seeders runner
const runSeeders = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("database connection established");
    })
    .catch((err) => console.log("error when connecting to Mongoose", err));

  if (process.argv[2] === "add") {
    await add()
      .then(() => {
        console.log("seeder add success");
      })
      .catch((err) => {
        console.log("seeder add error", err);
      });
  }

  if (process.argv[2] === "remove") {
    await remove()
      .then(() => {
        console.log("seeder remove success");
      })
      .catch((err) => {
        console.log("seeder remove error", err);
      });
  }
  await mongoose.connection.close();
  process.exit(0);
};

runSeeders();
