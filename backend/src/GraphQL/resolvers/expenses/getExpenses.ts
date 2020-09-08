import Expenses from "../../../Models/expense";
import { throwError, transformObjectToDocument } from "../../../Helper";

export default {
  getExpenses: async (parent: any, args: any, context: any, info: any) => {
    /**
     * Simplify
     */
    const { id } = args;
    const { isAuth, userId } = context.Auth;

    /**
     * Authenticating the user
     */
    if (!!!isAuth || id !== userId)
      return throwError("Token is invalid!", true, []);

    /**
     * Hittin the DB to get data
     */
    const gettingExpenses = await Expenses.find({ createdBy: { $in: id } });
    return transformObjectToDocument(gettingExpenses, "GetExpensesResult");
  },
};
