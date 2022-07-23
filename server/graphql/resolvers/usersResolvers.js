const Query = {
  users: async (_, __, { dataSources: { users } }) => {
    return await users.getAllUsers();
  }
};

const Mutation = {
  userRegistration: async (_, args, ___) => {
    return {
      code: 200,
      error: false,
      message: 'registration success',
      user: args.input
    };
  }
};

export default { Query, Mutation };
