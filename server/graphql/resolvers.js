import { User } from "../mongooDB";

export const resolvers = {
  Query: {
    users: async () => await User.find(),
  },
};
