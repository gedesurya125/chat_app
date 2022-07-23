const Query = {
  users: async (_, __, { dataSources: { users } }) => {
    return await users.getAllUsers();
  }
};

const Mutation = {
  userRegistration: async (_, args, ___) => {
    console.log('args', args);
    return 'userRegistered';
  }
};

export default { Query, Mutation };
