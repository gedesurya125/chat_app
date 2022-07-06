import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Query {
    users: [User!]!
    blogPosts: [BlogPost!]!
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    email: String!
    role: String!
    userName: String!
    password: String!
    messages: [Message!]!
  }

  type BlogPost {
    id: ID!
    title: String!
    subTitle: String!
    article: String!
  }

  type Message {
    id: ID!
    senderId: String!
    receiverId: String!
    createdAt: String!
    message: String!
  }
`;
