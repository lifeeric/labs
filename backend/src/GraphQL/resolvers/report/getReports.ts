import Reports from "../../../Models/reports";
import { throwError, transformObjectToDocument } from "../../../Helper";

export default {
  getReports: async (parent: any, args: any, context: any, info: any) => {
    /**
     * Simplify
     */
    const { id, patient_id } = args;
    const { isAuth, userId } = context.Auth;

    /**
     * Authenticating user is logged in
     */
    if (!!!isAuth || userId !== id)
      return throwError("Token is invalid!", true, []);

    /**
     * getting data from DB
     */
    let fetchingReports = await Reports.find({ user: id });

    /**
     * search by patient_id, if patient_id is true, so filter it
     */
    // if (patient_id)
    //   fetchingReports = fetchingReports.filter(
    //     (report) => report.patient_id === patient_id
    //   );

    return transformObjectToDocument(fetchingReports, "getReportResult");
  },
};
