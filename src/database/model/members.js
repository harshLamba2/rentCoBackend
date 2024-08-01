import mongoose, { Schema } from "mongoose";

const memberSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    phoneNumberBackup: {
      type: String,
    },
    groupId: {
      type: String,
    },
    tenancyType: {
      //shop(commercial), godown(commercial), rooms(residential), floor(residential)
      type: String,
    },
    rentAmount: {
      type: Number,
    },
    aadhaarNumber: {
      type: Long,
    },
    // tenantPicture:{}
  },
  {
    timestamps: true,
  }
);

const members =
  mongoose.models.members || mongoose.model("members", memberSchema);

export default members;
