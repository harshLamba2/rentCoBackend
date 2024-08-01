import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
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
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    otpSentTime: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const users = mongoose.models.users || mongoose.model("users", userSchema);

export default users;
