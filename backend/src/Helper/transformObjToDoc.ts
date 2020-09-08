import dateISO from "./date";

export default (object: any, type: string) => {
  return object.map((obj: any) => ({
    __typename: type,
    ...obj._doc,
    date: dateISO(obj.date),
  }));
};
