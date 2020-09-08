import Users from "../../../Models/user.model";
import mailer from "../../../Mailer/mailer";
import { jwtHelper, throwError } from "../../../Helper";

export default {
  forgotPassword: async (parent: any, args: any, context: any, info: any) => {
    /**
     * simplify
     */
    const { email } = args;

    /**
     * look up user
     */
    const doesEmailExist = await Users.findOne({ email });

    // user doesn't find
    if (!doesEmailExist) return throwError("Email doesn't find!");

    /**
     * Generate jwt token for passwrod resetting
     */

    const key = doesEmailExist.password + "-" + doesEmailExist.createdAt;
    const token = jwtHelper(email, doesEmailExist, key, 3600);

    /**
     * Email sending with the link to reset passwrod
     */
    mailer(
      "Reset password",
      `
        <p> click the link below to reset password!</p>
        <a href="${"fe"}">click here</a>
      `
    ).then((res) => res);

    /**
     * send data as response
     */
    return {
      __typename: "ForgetPassordResult",
      id: doesEmailExist._id,
      email,
      token,
    };
  },
};
