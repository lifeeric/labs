import Users from "../../../Models/user.model";
import { throwError, hashingPassword } from "../../../Helper";
import bcrypt from "bcryptjs";

export default {
  updatePassword: async (parent: any, args: any, context: any, info: any) => {
    /**
     * Simplify
     */
    const { id, oldPassword, newPassword, newPasswordAgain } = args;
    const { isAuth, userId } = context.Auth;

    /**
     * Check the token and id is equal
     */
    if (!!!isAuth || userId !== id) return throwError("Token is invalid!");

    /**
     * get the user data to compare the OldPassword
     */
    const user: any = await Users.findById(id);

    const passwordIsCorrect = await bcrypt.compare(oldPassword, user?.password);
    if (!!!passwordIsCorrect) return throwError("Old password doen't match!");

    /**
     * both passords are matched
     */
    if (!(newPassword === newPasswordAgain))
      return throwError("New password doesn't matched");

    /**
     * Hash the password
     */
    const hashedPassword = await hashingPassword(newPassword);

    /**
     * Update the hash in DB;
     */
    user.password = hashedPassword;
    await user.save();
    return throwError("Password successfuly changed!");
  },
};
