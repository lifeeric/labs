import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

const privateKey = fs.readFileSync(
  path.join(__dirname + "/labkey.pem"),
  "utf8"
);

export default (
  email: string,
  user: any,
  secretKey = privateKey,
  expires = 2592000
) => {
  const token = jwt.sign(
    {
      userId: user._id,
      email,
      isAdmin: user.isAdmin || false,
    },
    secretKey,
    {
      expiresIn: expires,
    }
  );
  return token;
};
