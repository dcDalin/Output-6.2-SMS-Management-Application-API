import SMS from '../../../models/sms';
import checkAuth from '../contact/utils/checkAuth';

export default {
  Query: {
    receivedSMSs: (_, _args, context) => {
      const me = checkAuth(context);
      return SMS.find({ phoneNumber: me.phoneNumber });
    },
  },
};
