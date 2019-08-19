import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    contacts: [Contact]
  }

  extend type Mutation {
    contactSignUp(contactSignUpInput: ContactSignUpInput): Contact!
  }

  type Contact {
    id: ID!
    name: String!
    phoneNumber: String!
    token: String
  }

  input ContactSignUpInput {
    name: String!
    phoneNumber: String!
    password: String!
    confirmPassword: String!
  }
`;
