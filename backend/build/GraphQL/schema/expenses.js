"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  extend type Query {\n    getExpenses(id: ID!): [getExpensesUnion]!\n    getChartData(id: ID!, date: String!): [GetChartUnion]!\n  }\n\n  union getExpensesUnion = GetExpensesResult | Error\n\n  type GetExpensesResult {\n    id: ID!\n    name: String!\n    description: String!\n    price: Float!\n    date: String!\n  }\n\n  union GetChartUnion = GetChartResult | Error\n\n  type GetChartResult {\n    id: ChartPiece\n    totalPrice: Float!\n    date: String!\n  }\n  type ChartPiece {\n    _id: ID\n    date: String\n  }\n\n  extend type Mutation {\n    addExpenses(add: addNewExpenses): ExpensesUnion!\n  }\n\n  input addNewExpenses {\n    id: ID!\n    name: String!\n    description: String!\n    price: Float!\n    date: String!\n  }\n\n  union ExpensesUnion = GetExpensesResult | Error\n"], ["\n  extend type Query {\n    getExpenses(id: ID!): [getExpensesUnion]!\n    getChartData(id: ID!, date: String!): [GetChartUnion]!\n  }\n\n  union getExpensesUnion = GetExpensesResult | Error\n\n  type GetExpensesResult {\n    id: ID!\n    name: String!\n    description: String!\n    price: Float!\n    date: String!\n  }\n\n  union GetChartUnion = GetChartResult | Error\n\n  type GetChartResult {\n    id: ChartPiece\n    totalPrice: Float!\n    date: String!\n  }\n  type ChartPiece {\n    _id: ID\n    date: String\n  }\n\n  extend type Mutation {\n    addExpenses(add: addNewExpenses): ExpensesUnion!\n  }\n\n  input addNewExpenses {\n    id: ID!\n    name: String!\n    description: String!\n    price: Float!\n    date: String!\n  }\n\n  union ExpensesUnion = GetExpensesResult | Error\n"])));
var templateObject_1;
