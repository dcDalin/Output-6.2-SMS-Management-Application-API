/* eslint-disable no-underscore-dangle */
import { UserInputError } from 'apollo-server-express';
import SMS from '../../../models/sms';
import Contact from '../../../models/contact';
import { validateSMS } from './utils/validators';
import checkAuth from '../contact/utils/checkAuth';

export default {
  Mutation: {
    async sendSms(_, { phoneNumber, message }, context) {
      const contact = checkAuth(context);

      const { valid, errors } = validateSMS(phoneNumber, message);
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      if (contact.phoneNumber === phoneNumber) {
        throw new UserInputError('You can not send an SMS to yourself', {
          errors: {
            username: 'You can not send an SMS to yoursel',
          },
        });
      }

      let status = 'Sent';

      const contactPhone = await Contact.findOne({ phoneNumber });

      if (!contactPhone) {
        status = 'Failed';
      }

      const newSms = new SMS({
        phoneNumber,
        message,
        me: contact.id,
        status,
      });

      const sms = await newSms.save();

      return sms;
    },
  },
};
