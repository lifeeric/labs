import Expenses from "../../../Models/expense";
import { throwError } from "../../../Helper/";
import user from "../User/user";

export default {
  addExpenses: async (parent: any, args: any, context: any, info: any) => {
    /**
     * Simplify
     */
    const { id, name, description, price, date } = args.add;
    const { isAuth, userId } = context.Auth;

    /**
     * Authenticating the user is logged in
     */
    if (!!!isAuth || userId !== id) return throwError("Token is invalid!");

    /**
     * checking empty inputs
     */
    if (!name || !description || !price || isNaN(new Date(date).getTime()))
      return throwError("All Fields are required!");

    /**
     * Adding detail to DB
     */
    const addNewExpenses = new Expenses({
      name,
      description,
      price,
      date,
      createdBy: id,
    });

    /**
     * Save and get the result
     */
    const result = await addNewExpenses.save();

    /**
     * Success Result
     */
    return {
      __typename: "GetExpensesResult",
      ...result._doc,
      id: result.id,
    };
  },
};
