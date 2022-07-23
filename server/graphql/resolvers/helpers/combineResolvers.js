// Helper function
export const combineResolvers = (
  resolvers = [{ Query: {}, Mutation: {}, Others: {} }]
) => {
  const arrangedResolvers = {
    Query: {},
    Mutation: {}
  };
  resolvers.forEach((resolver) => {
    if (!!resolver?.Query) {
      arrangedResolvers.Query = {
        ...arrangedResolvers.Query,
        ...resolver.Query
      };
    }
    if (resolver.Mutation) {
      arrangedResolvers.Mutation = {
        ...arrangedResolvers.Mutation,
        ...resolver.Mutation
      };
    }
    if (resolver.Others) {
      arrangedResolvers = { ...arrangedResolvers, ...resolver.Others };
    }
  });
  return arrangedResolvers;
};
