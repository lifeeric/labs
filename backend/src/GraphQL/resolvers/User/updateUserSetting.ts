import User from "../../../Models/user.model";
import { throwError } from "../../../Helper/";
import mongoose from "mongoose";

export default {
  updateUserSetting: async (
    parent: any,
    args: any,
    context: any,
    info: any
  ) => {
    /**
     * Simplify
     */
    const { id, name, company, email } = args;
    const { isAuth, userId } = context.Auth;

    /**
     * if the token isn't yet provided, and not match. or id isn't valid
     * retject it
     */
    if ((!!!isAuth && id !== userId) || !mongoose.Types.ObjectId.isValid(id))
      return throwError("Token is not provided!");

    /**
     * checking empty fields
     */
    if (!name || !company || !email)
      return throwError("All fields are required!");

    /**
     * update data
     */

    const updateSettingData = await User.findByIdAndUpdate(id, {
      company: company,
      name: name,
      email: email,
    });

    const result = await updateSettingData?.save();
    console.log(result, updateSettingData, " UpdateUserSetting");

    /**
     * Return
     */
    return {
      __typename: "GetUserSettingResult",
      ...result?._doc,
    };
  },
};
