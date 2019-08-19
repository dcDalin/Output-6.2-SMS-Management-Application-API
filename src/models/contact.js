import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    name: String,
    phoneNumber: String,
    password: String,
    role: {
      type: [{ type: String, enum: ['Admin', 'User'] }],
      default: 'User',
    },
  },
  {
    timestamps: true,
  },
);

export default model('Contact', contactSchema);
