import { gql } from 'apollo-server-core';

export const userSchema = gql`
  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    userRegistration(input: UserRegistration): UserRegistrationResponse!
  }

  input UserRegistration {
    firstName: String!
    middleName: String!
    lastName: String!
    email: String!
    phone: String!
  }
  type UserRegistrationResponse {
    code: Int!
    error: Boolean!
    message: String!
    user: RegisteredUser
  }

  type RegisteredUser {
    firstName: String!
    middleName: String!
    lastName: String!
    email: String!
    phone: String!
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

  type Message {
    id: ID!
    senderId: String!
    receiverId: String!
    createdAt: String!
    message: String!
  }
`;
