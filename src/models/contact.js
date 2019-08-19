import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    name: String,
    phoneNumber: String,
    password: String,
  },
  {
    timestamps: true,
  },
);

export default model('Contact', contactSchema);
