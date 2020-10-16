import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  company: string;
  password: string;
  refered: string[];
  _doc: any;
  createdAt: string;
  id: any;
}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: false },
    refered: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("Users", userSchema);
