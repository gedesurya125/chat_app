import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type User {
    name: String!
  }
`;
