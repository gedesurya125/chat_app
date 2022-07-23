const Query = {
  blogPosts: async (_, __, { dataSources: { blogPosts } }) => {
    return await blogPosts.getAllBlogPosts();
  }
};

export default { Query };
