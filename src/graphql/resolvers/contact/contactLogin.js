/* eslint-disable no-underscore-dangle */
import { UserInputError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import Contact from '../../../models/contact';
import { validateLoginInput } from './utils/validators';
import { generateToken } from './utils/token';

export default {
  Mutation: {
    async contactLogin(_, { phoneNumber, password }) {
      // Validate user input
      const { valid, errors } = validateLoginInput(phoneNumber, password);
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      const contact = await Contact.findOne({ phoneNumber });

      if (!contact) {
        errors.general = 'Contact not found';
        throw new UserInputError('Contact not found', { errors });
      }

      const match = await bcrypt.compare(password, contact.password);

      if (!match) {
        errors.general = 'Wrong credentials';
        throw new UserInputError('Wrong credentials', { errors });
      }

      const token = generateToken(contact);

      return {
        ...contact._doc,
        id: contact._id,
        token,
      };
    },
  },
};
