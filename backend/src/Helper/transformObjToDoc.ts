import dateISO from "./date";
import { Types } from "mongoose";

export default (object: any, type: string) => {
  return object.map((obj: any) => ({
    __typename: type,
    ...(obj._doc ? obj._doc : obj),
    id: Types.ObjectId.isValid(obj._id)
      ? obj._id
      : { ...obj._id, date: dateISO(obj._id.date) },
    date: obj.date && dateISO(obj.date),
  }));
};
