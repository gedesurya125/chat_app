import { gql } from 'apollo-server-core';

// Other file should extend the type Query and type Mutation
// to be able to combined
export const base = gql`
  type Query
  type Mutation
`;
