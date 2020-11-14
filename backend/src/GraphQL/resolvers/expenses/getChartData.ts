import Expenses from "../../../Models/expense";
import mongoose from "mongoose";
import {
  throwError,
  transformObjectToDocument,
  dateFinder,
} from "../../../Helper/";

export default {
  getChartData: async (parent: any, args: any, context: any, info: any) => {
    /**
     * Simplify
     */
    const { id, date } = args;
    const { isAuth, userId } = context.Auth;

    /**
     * Authenticating the user is logged in
     */

    if (!!!isAuth || userId !== id)
      return throwError("Token is invalid!", true, []);

    /**
     * Filter by Date
     */
    const filterBy = ["Today", "Yesterday", "This Month", "Previous Month"];

    if (!filterBy.includes(date))
      return throwError("Date is not valid!", true, []);

    const [startingDate, endingDate] = dateFinder(date);

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
