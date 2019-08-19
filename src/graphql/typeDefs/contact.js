import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    contacts: [Contact]
  }

  type Contact {
    id: ID!
    name: String!
    phoneNumber: String!
    token: String
  }
`;
