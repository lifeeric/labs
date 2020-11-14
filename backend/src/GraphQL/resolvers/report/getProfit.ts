import Report from "../../../Models/reports";
import {
  throwError,
  dateFinder,
  transformObjectToDocument,
} from "../../../Helper";
import mongoose from "mongoose";

export const getProfit = {
  getProfit: async (parent: any, args: any, context: any, info: any) => {
    /**
     * Simplify
     */
    const { id, date } = args;
    const { isAuth, userId } = context.Auth;

    /**
     * if the token is not provide or user not authenticated
     */
    if (!!!isAuth || userId !== id) return throwError("Token is invalid!");

    /**
     * find the date
     */
    const filterBy = ["Today", "Yesterday", "This Month", "Previous Month"];

    if (!filterBy.includes(date)) return throwError("Date isn't  Valid!");

    const [startingDate, endingDate] = dateFinder(date);

    const resultFound = await Report.aggregate([
      {
        $match: {
          createdBy: mongoose.Types.ObjectId(id),
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
    console.log(resultFound)

    return transformObjectToDocument(resultFound, "GetLabProfit");
  },
};
