import SMS from '../../../models/sms';
import checkAuth from '../contact/utils/checkAuth';

export default {
  Query: {
    sentSMSs: (_, _args, context) => {
      const me = checkAuth(context);
      return SMS.find({ me: me.id });
    },
  },
};
