/* eslint-disable no-underscore-dangle */
import { UserInputError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import Contact from '../../../models/contact';
import { validateContactSignup } from './utils/validators';
import { generateToken } from './utils/token';

export default {
  Mutation: {
    async contactSignUp(
      _,
      {
        contactSignUpInput: {
          name, phoneNumber, password, confirmPassword,
        },
      },
    ) {
      // Validate user input
      const { valid, errors } = validateContactSignup(name, phoneNumber, password, confirmPassword);
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      // Make sure username doesn't exist
      const contactName = await Contact.findOne({ name });
      if (contactName) {
        throw new UserInputError('Name is taken', {
          errors: {
            username: 'This name is taken',
          },
        });
      }

      // Make sure phone number doesn't exist
      const contactNumber = await Contact.findOne({ phoneNumber });
      if (contactNumber) {
        throw new UserInputError('Phone number exists', {
          errors: {
            username: 'Phone number already exists',
          },
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 12);

      const newContact = new Contact({
        name,
        phoneNumber,
        password: hashedPassword,
      });

      // Save to DB
      const res = await newContact.save();

      // Generate token
      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
