import { gql } from 'apollo-server-core';
export const blogPostSchema = gql`
  extend type Query {
    blogPosts: [BlogPost!]!
  }

  type BlogPost {
    id: ID!
    title: String!
    subTitle: String!
    article: String!
  }
`;
