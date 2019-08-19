import contacts from './contacts';
import contactSignUp from './contactSignUp';
import contactLogin from './contactLogin';

export default {
  Query: {
    ...contacts.Query,
  },
  Mutation: {
    ...contactSignUp.Mutation,
    ...contactLogin.Mutation,
  },
};
