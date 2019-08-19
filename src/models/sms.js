import { Schema, model } from 'mongoose';

const smsSchema = new Schema(
  {
    phoneNumber: String,
    message: String,
    status: {
      type: String,
      enum: ['Sent', 'Failed'],
      default: 'Sent',
    },
    me: {
      type: Schema.Types.ObjectId,
      ref: 'contacts',
    },
  },
  {
    timestamps: true,
  },
);

export default model('SMS', smsSchema);
