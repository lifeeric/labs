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
var date_1 = __importDefault(require("./date"));
var mongoose_1 = require("mongoose");
exports.default = (function (object, type) {
    console.log();
    return object.map(function (obj) { return (__assign(__assign({ __typename: type }, (obj._doc ? obj._doc : obj)), { id: mongoose_1.Types.ObjectId.isValid(obj._id)
            ? obj._id
            : __assign(__assign({}, obj._id), { date: date_1.default(obj._id.date) }), date: obj.date && date_1.default(obj.date) })); });
});
