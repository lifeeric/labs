import mongoose, { Schema, Document } from "mongoose";

interface IReport extends Document {
  patient_id: number;
  patient_name: string;
  patient_referedby: string;
  patient_age: number;
  patient_sex: string;
  price: number;
  date: Date;
  _doc: any;
  user: any;
  id: any;
}

const Report: Schema = new Schema(
  {
    patient_id: { type: Number, required: true },
    patient_name: { type: String, required: true },
    patient_referedby: { type: String, required: true },
    patient_age: { type: Number, required: true },
    patient_sex: { type: String, required: true },
    price: { type: Number, required: true },
    date: Date,
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IReport>("Reports", Report);
