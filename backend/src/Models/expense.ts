import mongoose, { Schema, Document } from "mongoose";

interface IExpenses extends Document {
  name: string;
  description: string;
  price: number;
  date: Date;
  createdBy: string;
  _doc: any;
}

const Expenses: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    date: Date,
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IExpenses>("Expenses", Expenses);
