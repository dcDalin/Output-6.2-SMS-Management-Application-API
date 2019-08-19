/* eslint-disable no-underscore-dangle */

import { AuthenticationError } from 'apollo-server-express';
import SMS from '../../../models/sms';
import Contact from '../../../models/contact';
import checkAuth from './utils/checkAuth';

export default {
  Mutation: {
    async adminDeleteContact(_, { id }, context) {
      const admin = checkAuth(context);
      if (admin.role !== 'Admin') {
        throw new AuthenticationError('Only admin can delete contact');
      }
      Contact.deleteMany({ id });
      SMS.pre('remove', (next) => {
        this.model('sms').remove({ me: this._id }, next);
        next();
      });
      return true;
    },
  },
};
