import Users from "../../../Models/user.model";
import { hashingPassword, throwError } from "../../../Helper";
import jwt from "jsonwebtoken";

/**
 * This Endpoints need to improved
 * due to duplicate code for verifying jwt token
 * as already a middleware validating token
 */

export default {
  resetPassword: async (parent: any, args: any, context: any, info: any) => {
    /**
     * Simpliy arguments, desctructing
     */
    const { id, password, passwordAgain } = args;
    const {
      isAuth,
      headers: { authorization },
    } = context.req;

    /**
     * find user and get the old hash, createdAt as well
     */
    const user = await Users.findById(id);

    /**
     * create secretkey. get the token from the request
     */
    const key = user?.password + "-" + user?.createdAt;
    const token = authorization && authorization.split(" ")[1];

    // token not provided
    if (!!!token) return throwError("The URL doesn't seem to be valid!");

    /**
     * Decoding Password and verifying
     */
    let decodedToken: any;
    try {
      decodedToken = jwt.verify(token, key);
    } catch (err) {
      return throwError("The link has been expired!");
    }

    /**
     * Token didn't match
     */
    if (!!!decodedToken) return throwError("Token doesn't Match!");

    /**
     * password doesn't match
     */

    if ((!password && !passwordAgain) || !(password === passwordAgain))
      return throwError("Password doesn't match!");

    /**
     * Hashing Password from plain text
     */
    const hashedPassword = await hashingPassword(password);

    /**
     * Updating old password in db;
     */
    const changePasswrod = await Users.findByIdAndUpdate(id, {
      password: hashedPassword,
    });

    await changePasswrod!.save();

    /**
     * Return Success message
     */
    return throwError("Password changed successfully!", false);
  },
};
