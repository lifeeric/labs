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
    return mailer(
      email,
      "Reset password",
      `
        <p> click the link below to reset password!</p>
        <a href="http://localhost:8000/app/forgot-password/reset?token=${token}">click here</a>
      `
    ).then((res) => {
      return {
        __typename: "Error",
        error: true,
        message: "Email has been sent with the rest link",
      };
    });

    /**
     * send data as response
     */
    // return {
    //   __typename: "ForgetPassordResult",
    //   id: doesEmailExist._id,
    //   email,
    //   token,
    // };
  },
};
