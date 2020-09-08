export default (mesg: string, err: boolean = true, array: []) =>
  Array.isArray(array)
    ? [
        {
          __typename: "Error",
          error: err,
          message: mesg,
        },
      ]
    : {
        __typename: "Error",
        error: err,
        message: mesg,
      };
