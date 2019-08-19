import sendSms from './sendSms';
import sentSMSs from './sentSMSs';
import receivedSMSs from './receivedSMSs';

export default {
  Query: {
    ...sentSMSs.Query,
    ...receivedSMSs.Query,
  },
  Mutation: {
    ...sendSms.Mutation,
  },
};
