import mongoose from 'mongoose';

const NameCheckFormSchema = new mongoose.Schema(
  {
    proposedCompanyName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    alternatePhoneNumber: {
      type: String,
    },
    businessActivity: {
      type: String,
      required: true,
    },
    startBusinessDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.NameCheckForm ||
  mongoose.model('NameCheckForm', NameCheckFormSchema);
