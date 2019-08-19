import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    contacts: [Contact]
    me: Contact
  }

  extend type Mutation {
    contactSignUp(contactSignUpInput: ContactSignUpInput): Contact!
    contactLogin(phoneNumber: String!, password: String!): Contact!
    sendSms(phoneNumber: String!, message: String!): SMS!
  }

  type Contact {
    id: ID!
    name: String!
    phoneNumber: String!
    token: String
  }

  type SMS {
    id: ID!
    phoneNumber: String!
    message: String!
    status: String!
  }

  input ContactSignUpInput {
    name: String!
    phoneNumber: String!
    password: String!
    confirmPassword: String!
  }
`;
