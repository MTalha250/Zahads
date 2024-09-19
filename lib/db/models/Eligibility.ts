import mongoose from "mongoose";

const EligibilitySchema = new mongoose.Schema(
  {
    requirement: {
      type: String,
      required: true,
    },
    uae: {
      type: String,
      required: true,
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Eligibility =
  mongoose.models.Eligibility ||
  mongoose.model("Eligibility", EligibilitySchema);

export default Eligibility;