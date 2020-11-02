import Expenses from "../../../Models/expense";
import mongoose from "mongoose";
import { throwError, transformObjectToDocument } from "../../../Helper/";

export default {
  getChartData: async (parent: any, args: any, context: any, info: any) => {
    /**
     * Simplify
     */
    const { id } = args;
    const { isAuth, userId } = context.Auth;

    /**
     * Authenticating the user is logged in
     */

    if (!!!isAuth || userId !== id)
      return throwError("Token is invalid!", true, []);

    const startingDate = new Date("10/02/2020");
    const endingDate = new Date("11/02/2020");
    // const endingDate = +Infinity;

    /**
     * Get conditionally data from db
     */
    const resultFound = await Expenses.aggregate([
      {
        $match: {
          createdBy: mongoose.Types.ObjectId(args.id),
          date: { $gte: startingDate, $lt: endingDate },
        },
      },
      {
        $group: {
          _id: { _id: "$createdBy", date: "$date" },
          totalPrice: { $sum: "$price" },
        },
      },
    ]);

    // return result
    return transformObjectToDocument(resultFound, "GetChartResult");
  },
};
