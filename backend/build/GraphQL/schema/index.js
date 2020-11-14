"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var user_1 = __importDefault(require("./user"));
var expenses_1 = __importDefault(require("./expenses"));
var testTemplate_1 = __importDefault(require("./testTemplate"));
var reports_1 = __importDefault(require("./reports"));
exports.default = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    _empty: String\n  }\n  type Mutation {\n    _empty: String\n  }\n\n  type Error {\n    error: Boolean!\n    message: String!\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  type Query {\n    _empty: String\n  }\n  type Mutation {\n    _empty: String\n  }\n\n  type Error {\n    error: Boolean!\n    message: String!\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n"])), expenses_1.default, user_1.default, testTemplate_1.default, reports_1.default);
var templateObject_1;
