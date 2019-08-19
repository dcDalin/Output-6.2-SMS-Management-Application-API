import contacts from './contacts';
import contactSignUp from './contactSignUp';
import contactLogin from './contactLogin';
import adminDeleteContact from './adminDeleteContact';

export default {
  Query: {
    ...contacts.Query,
  },
  Mutation: {
    ...contactSignUp.Mutation,
    ...contactLogin.Mutation,
    ...adminDeleteContact.Mutation,
  },
};
