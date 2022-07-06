// import { User } from "../mongooDB";

export const resolvers = {
  Query: {
    users: async (_, __, { dataSources: { users } }) => {
      return await users.getAllUsers();
    },
    blogPosts: async (_, __, { dataSources: { blogPosts } }) => {
      return await blogPosts.getAllBlogPosts();
    },
  },
};
