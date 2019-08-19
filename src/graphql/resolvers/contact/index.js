import contacts from './contacts';
import contactSignUp from './contactSignUp';

export default {
  Query: {
    ...contacts.Query,
  },
  Mutation: {
    ...contactSignUp.Mutation,
  },
};
