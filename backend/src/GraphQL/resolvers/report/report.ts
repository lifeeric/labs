import Report from "../../../Models/reports";
import { throwError, dateISO } from "../../../Helper";

export default {
  addReport: async (parent: any, args: any, context: any, info: any) => {
    /**
     * Simplify
     */
    const {
      id,
      patient_id,
      patient_name,
      patient_referedby,
      patient_sex,
      patient_age,
      date,
      price,
    } = args.add;
    const { isAuth, userId } = context.Auth;

    /**
     * Authenticating user is logged in
     */
    if (!!!isAuth || userId !== id) return throwError("Token is invalid!");

    /**
     * Checking empty fields
     */
    if (
      !patient_id ||
      !patient_name ||
      !patient_referedby ||
      !patient_sex ||
      !patient_age ||
      isNaN(new Date(date).getTime()) ||
      !price
    )
      return throwError("All Fields are required!");

    /**
     * add to DB
     */
    const addNewReport = await new Report({
      patient_id,
      patient_name,
      patient_referedby,
      patient_sex,
      patient_age,
      date,
      price,
      user: userId,
      test_id,
      test_name,
      test_result,
    });
    console.log(addNewReport);

    /**
     * insert the data and get the result
     */
    const result = await addNewReport.save();

    /**
     * Return Result
     */
    return {
      __typename: "getReportResult",
      ...result._doc,
      date: dateISO(result.date),
    };
  },
};
