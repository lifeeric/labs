import Users from "./User/user";
import Login from "./User/login";
import forgotPassword from "./User/forgotPass";
import resetPassword from "./User/resetPass";
import userSetting from "./User/userSetting";
import updatePassword from "./User/updatePass";
import addExpenses from "./expenses/addExpenses";
import getExpenses from "./expenses/getExpenses";
import addReport from "./report/report";
import getReports from "./report/getReports";
import updateUserSetting from "./User/updateUserSetting";
import getChartData from "./expenses/getChartData";
import { getProfit } from "./report/getProfit";
import { getTotalRecords } from "./report/totalRecords";
import { generateTemplate } from "./report/generateTemplate";
import { getTemplate } from "./report/getTemplate";

export default {
  Query: {
    ...Login,
    ...forgotPassword,
    ...userSetting,
    ...getExpenses,
    ...getReports,
    ...getChartData,
    ...getProfit,
    ...getTotalRecords,
    ...getTemplate,
  },
  Mutation: {
    ...Users,
    ...resetPassword,
    ...updatePassword,
    ...addExpenses,
    ...addReport,
    ...updateUserSetting,
    ...generateTemplate,
  },
};
