import Reports from "../../../Models/reports";
import { throwError, transformObjectToDocument } from "../../../Helper";
import mongoose from "mongoose";

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
    console.log(!!patient_id);
    const p_id = patient_id;
    let fetchingReports = await Reports.aggregate([
      ...(p_id
        ? [
            {
              $match: {
                createdBy: mongoose.Types.ObjectId(id),
                patient_id: p_id,
              },
            },
          ]
        : [
            {
              $match: {
                createdBy: mongoose.Types.ObjectId(id),
              },
            },
          ]),
    ]);

    return transformObjectToDocument(fetchingReports, "getReportResult");
  },
};
