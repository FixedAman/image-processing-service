import mongoose from "mongoose";
export interface I_userDocument extends mongoose.Document {
  name: string;
  password: string;
}
const { Schema } = mongoose;

const userSchema: mongoose.Schema<I_userDocument> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model<I_userDocument>("User", userSchema);

export default User;
