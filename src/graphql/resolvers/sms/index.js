import sendSms from './sendSms';

export default {
  Mutation: {
    ...sendSms.Mutation,
  },
};
