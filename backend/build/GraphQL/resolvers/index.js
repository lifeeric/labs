"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./User/user"));
var login_1 = __importDefault(require("./User/login"));
var forgotPass_1 = __importDefault(require("./User/forgotPass"));
var resetPass_1 = __importDefault(require("./User/resetPass"));
var userSetting_1 = __importDefault(require("./User/userSetting"));
var updatePass_1 = __importDefault(require("./User/updatePass"));
var addExpenses_1 = __importDefault(require("./expenses/addExpenses"));
var getExpenses_1 = __importDefault(require("./expenses/getExpenses"));
var addTemplate_1 = __importDefault(require("./testTemplate/addTemplate"));
var report_1 = __importDefault(require("./report/report"));
var getReports_1 = __importDefault(require("./report/getReports"));
var updateUserSetting_1 = __importDefault(require("./User/updateUserSetting"));
var getChartData_1 = __importDefault(require("./expenses/getChartData"));
var getProfit_1 = require("./report/getProfit");
var totalRecords_1 = require("./report/totalRecords");
exports.default = {
    Query: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, login_1.default), forgotPass_1.default), userSetting_1.default), getExpenses_1.default), getReports_1.default), getChartData_1.default), getProfit_1.getProfit), totalRecords_1.getTotalRecords),
    Mutation: __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, user_1.default), resetPass_1.default), updatePass_1.default), addExpenses_1.default), addTemplate_1.default), report_1.default), updateUserSetting_1.default),
};
