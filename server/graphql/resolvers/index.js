import { combineResolvers } from './helpers/combineResolvers';
import usersResolvers from './usersResolvers';
import blogPostResolvers from './blogPostResolvers';

const resolvers = combineResolvers([usersResolvers, blogPostResolvers]);

export default resolvers;
