"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = __importDefault(require("../../../Models/user.model"));
var mailer_1 = __importDefault(require("../../../Mailer/mailer"));
var Helper_1 = require("../../../Helper");
exports.default = {
    forgotPassword: function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
        var email, doesEmailExist, key, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = args.email;
                    return [4 /*yield*/, user_model_1.default.findOne({ email: email })];
                case 1:
                    doesEmailExist = _a.sent();
                    // user doesn't find
                    if (!doesEmailExist)
                        return [2 /*return*/, Helper_1.throwError("Email has been sent with the rest link")];
                    /**
                     * Generate jwt token for passwrod resetting
                     */
                    console.log(doesEmailExist);
                    key = doesEmailExist.password + "-" + doesEmailExist.createdAt;
                    token = Helper_1.jwtHelper(email, doesEmailExist, key, 3600);
                    /**
                     * Email sending with the link to reset passwrod
                     */
                    return [2 /*return*/, mailer_1.default(email, "Reset password", "\n        <p> click the link below to reset password!</p>\n        <a href=\"http://localhost:8000/app/forgot-password/reset?token=" + token + "&uniqid=" + doesEmailExist._id + "\">click here</a>\n      ").then(function (res) {
                            return {
                                __typename: "Error",
                                error: true,
                                message: "Email has been sent with the rest link",
                            };
                        })];
            }
        });
    }); },
};
