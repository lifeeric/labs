import Report from "../../../Models/reports";
import { throwError } from "../../../Helper/";

export const getTotalRecords = {
  getTotalRecord: async (parent: any, args: any, context: any, info: any) => {
    /**
     * Simplify
     */
    const { id } = args;
    const { isAuth, userId } = context.Auth;

    /**
     * Authenticating
     */
    if (!!!isAuth && userId !== id) return throwError("Token is invalid!");

    /**
     * Level Up logic here
     */
    let userLevel = "Lv 1";

    const foundResult = await Report.countDocuments({
      date: { $gt: new Date("01/01/2020") },
    });

    /**
     * If completed 100 reports. so level up to 2
     */
    if (foundResult >= 100) userLevel = "Lv 2";

    console.log(typeof foundResult);

    return {
      __typename: "getTotalRecordResult",
      level: userLevel,
      totalTests: foundResult,
    };
  },
};
