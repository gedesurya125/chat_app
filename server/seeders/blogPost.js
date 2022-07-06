import { BlogPost } from "../mongooDB";
import { faker } from "@faker-js/faker";

const FAKE_COUNT = 10;

// Add single blog post
const addNewBlogPost = async (title, subTitle, article) => {
  const newBlopPost = new BlogPost({
    title,
    subTitle,
    article,
  });
  await newBlopPost.save();
};

export const addNewBlogPosts = async () => {
  for (let i = 0; i < FAKE_COUNT; i++) {
    await addNewBlogPost(
      faker.lorem.words(),
      faker.lorem.words(5),
      faker.lorem.paragraph()
    );
  }
};

export const removeBlogPosts = async () => {
  await BlogPost.deleteMany();
};
