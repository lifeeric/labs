import mongoose, { Schema, Document } from "mongoose";

interface ITemplate extends Document {
  test_name: string;
  test_label1: string;
  test_value1: string;
  test_label2: string;
  test_value2: string;
}

const testTemplate: Schema = new Schema(
  {
    test_name: { type: String, required: true },
    test_label1: { type: String, required: true },
    test_value1: { type: String, required: true },
    test_label2: { type: String, required: true },
    test_value2: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ITemplate>("TestTemplate", testTemplate);
