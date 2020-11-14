"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  extend type Mutation {\n    addTestTemplate(add: addTemplate): getTestTemplateResult!\n  }\n\n  input addTemplate {\n    test_name: String!\n    test_label1: String!\n    test_value1: String\n    test_label2: String\n    test_value2: String\n  }\n\n  type getTestTemplateResult {\n    test_name: String\n    test_label1: String\n    test_value1: String\n    test_label2: String\n    test_value2: String\n  }\n"], ["\n  extend type Mutation {\n    addTestTemplate(add: addTemplate): getTestTemplateResult!\n  }\n\n  input addTemplate {\n    test_name: String!\n    test_label1: String!\n    test_value1: String\n    test_label2: String\n    test_value2: String\n  }\n\n  type getTestTemplateResult {\n    test_name: String\n    test_label1: String\n    test_value1: String\n    test_label2: String\n    test_value2: String\n  }\n"])));
var templateObject_1;
