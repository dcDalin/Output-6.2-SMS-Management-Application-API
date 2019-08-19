import Contact from '../../../models/contact';
import checkAuth from './utils/checkAuth';

export default {
  Query: {
    contacts: () => Contact.find({}),
    me: (_, _args, context) => {
      const me = checkAuth(context);
      return Contact.findById(me.id);
    },
  },
};
