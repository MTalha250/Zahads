import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    businessType: {
      type: String,
    },
    consent: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Form || mongoose.model('Form', FormSchema);
