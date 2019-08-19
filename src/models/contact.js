import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    name: String,
    phoneNumber: String,
    password: String,
    role: {
      type: String,
      enum: ['Admin', 'User'],
      default: 'User',
    },
  },
  {
    timestamps: true,
  },
);

const Contact = model('Contact', contactSchema);

Contact.create({
  name: 'Administrator',
  phoneNumber: '0712345678',
  password: 'Password',
  role: 'Admin',
});

export default Contact;
