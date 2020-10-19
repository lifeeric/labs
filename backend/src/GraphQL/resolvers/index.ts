import Users from "./User/user";
import Login from "./User/login";
import forgotPassword from "./User/forgotPass";
import resetPassword from "./User/resetPass";
import userSetting from "./User/userSetting";
import updatePassword from "./User/updatePass";
import addExpenses from "./expenses/addExpenses";
import getExpenses from "./expenses/getExpenses";
import addTemplate from "./testTemplate/addTemplate";
import reports from "./report/report";
import getReports from "./report/getReports";
import updateUserSetting from "./User/updateUserSetting";

export default {
  Query: {
    ...Login,
    ...forgotPassword,
    ...userSetting,
    ...getExpenses,
    ...getReports,
  },
  Mutation: {
    ...Users,
    ...resetPassword,
    ...updatePassword,
    ...addExpenses,
    ...addTemplate,
    ...reports,
    ...updateUserSetting,
  },
};
