import jwt from 'jsonwebtoken';
import config from '../../../../config';

const ENV_VAR = config.get(process.env.NODE_ENV);

const generateToken = contact => jwt.sign(
  {
    id: contact.id,
    name: contact.name,
    phoneNumber: contact.phoneNumber,
  },
  ENV_VAR.APP_SECRET,
  { expiresIn: '1h' },
);

// eslint-disable-next-line import/prefer-default-export
export { generateToken };
