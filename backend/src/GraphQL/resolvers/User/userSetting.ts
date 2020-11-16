import Users from "../../../Models/user.model";
import { throwError } from "../../../Helper";

export default {
  userSetting: async (parent: any, args: any, context: any, info: any) => {
    /**
     * Simplify, get Id from the request made from client
     */
    const { id } = args;
    const { isAuth, userId } = context.Auth;

    /**
     * if the token is not provided, or not matched then
     *  reject the request
     */
    if (!!!isAuth || id !== userId) return throwError("Token is not provided!");

    /**
     * Get the user Data from DB
     */
    const userData = await Users.findById(id).populate("refered");

    /**
     * return response
     */
    return {
      __typename: "GetUserSettingResult",
      ...userData?._doc,
      id: userData?.id,
      company: userData?.company && userData.company,
    };
  },
};
