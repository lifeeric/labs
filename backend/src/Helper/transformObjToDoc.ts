import dateISO from "./date";

export default (object: any, type: string) => {
  return object.map((obj: any) => ({
    __typename: type,
    ...obj._doc,
    id: obj.id,
    date: dateISO(obj.date),
  }));
};
