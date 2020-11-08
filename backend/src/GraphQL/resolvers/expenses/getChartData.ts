import Expenses from "../../../Models/expense";
import mongoose from "mongoose";
import { throwError, transformObjectToDocument } from "../../../Helper/";

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

    let startingDate;
    let endingDate;
    let today = new Date();

    if (date === "Today") {
      startingDate = new Date();
      // today.ho(today.getDate() + 1);
      // startingDate.setDate(1);
      startingDate.setHours(0);
      startingDate.setMinutes(0);
      startingDate.setSeconds(0);
      endingDate = today;
      console.log(startingDate, endingDate, " => Today");
    } else if (date === "Yesterday") {
      let yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);
      startingDate = yesterday;
      endingDate = today;
    } else if (date === "This Month") {
      let currentMonth = new Date();
      currentMonth.setDate(1);
      currentMonth.setHours(0);
      currentMonth.setMinutes(0);
      currentMonth.setSeconds(0);
      startingDate = currentMonth;
      endingDate = new Date();
    } else if (date === "Previous Month") {
      let currentMonth = new Date();
      currentMonth.setMonth(currentMonth.getMonth() - 1);
      currentMonth.setDate(1);
      currentMonth.setHours(0);
      currentMonth.setMinutes(0);
      currentMonth.setSeconds(0);
      startingDate = currentMonth;

      let previousMonth = new Date();
      let y = previousMonth.getFullYear();
      previousMonth.setMonth(previousMonth.getMonth() - 1);
      let m = previousMonth.getMonth();

      let firstDay = new Date(y, m, 1);
      let lastDay = new Date(y, m + 1, 0);
      endingDate = lastDay;
      console.log(startingDate, endingDate, " Previous Month found");
    }

    console.log(startingDate?.toISOString(), " => ", endingDate?.toISOString());

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
