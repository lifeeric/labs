import Report from "../../../Models/reports";
import { throwError, dateISO } from "../../../Helper";
import uniqID from "nodejs-unique-numeric-id-generator";

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
      tests,
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
    let generate_id = patient_id;
    if (!patient_id) generate_id = uniqID.generate(new Date().toJSON());

    const addNewReport = await new Report({
      patient_id: generate_id,
      patient_name,
      patient_referedby,
      patient_sex,
      patient_age,
      date,
      price,
      createdBy: id,
      tests,
    });

    /**
     * insert the data and get the result
     */
    const result = await addNewReport.save();
    console.log(result);

    /**
     * Return Result
     */
    return {
      __typename: "getReportResult",
      ...result._doc,
      id: result.id,
      date: dateISO(result.date),
    };
  },
};
