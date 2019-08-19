import Contact from '../../../models/contact';

export default {
  Query: {
    contacts: () => Contact.find({}),
  },
};
