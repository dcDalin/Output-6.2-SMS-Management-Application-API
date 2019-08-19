import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    contacts: [Contact]
    me: Contact
    sentSMSs: [SentSMS]
    receivedSMSs: [ReceivedSMS]
  }

  extend type Mutation {
    contactSignUp(contactSignUpInput: ContactSignUpInput): Contact!
    contactLogin(phoneNumber: String!, password: String!): Contact!
    sendSms(phoneNumber: String!, message: String!): SentSMS!
    adminDeleteContact(id: ID!): Boolean!
  }

  type Contact {
    id: ID!
    name: String!
    phoneNumber: String!
    token: String
    role: String
  }

  type SentSMS {
    id: ID!
    to: String
    phoneNumber: String!
    message: String!
    status: String!
  }

  type ReceivedSMS {
    id: ID!
    from: String
    phoneNumber: String!
    message: String!
  }

  input ContactSignUpInput {
    name: String!
    phoneNumber: String!
    password: String!
    confirmPassword: String!
  }
`;
