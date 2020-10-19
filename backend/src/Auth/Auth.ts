import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

const privateKey = fs.readFileSync(
  path.join(__dirname + "/../Helper/labkey.pem"),
  "utf8"
);

export default (request: any, key = privateKey) => {
  const header = request.req.headers.authorization;
// console.log(header, ' Header') there is error
  // header not found
  if (!header)
    return {
      isAuth: false,
    };

  // split token in to array
  const token: any = header.split(" ");

  // token not found
  if (!token[1]) {
    return {
      isAuth: false,
    };
  }

  let decodeToken: any;

  try {
    decodeToken = jwt.verify(token[1], key);
  } catch (err) {
    return {
      isAuth: false,
    };
  }

  if (!!!decodeToken) {
    return {
      isAuth: false,
    };
  }

  // Success message
  request.res.status(200);
  return {
    isAuth: true,
    userId: decodeToken.userId,
  };
};
