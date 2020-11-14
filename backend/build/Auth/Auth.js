"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var privateKey = fs_1.default.readFileSync(path_1.default.join(__dirname + "/../Helper/labkey.pem"), "utf8");
exports.default = (function (request, key) {
    if (key === void 0) { key = privateKey; }
    var header = request.req.headers.authorization;
    // console.log(header, ' Header') there is error
    // header not found
    if (!header)
        return {
            isAuth: false,
        };
    // split token in to array
    var token = header.split(" ");
    // token not found
    if (!token[1]) {
        return {
            isAuth: false,
        };
    }
    var decodeToken;
    try {
        decodeToken = jsonwebtoken_1.default.verify(token[1], key);
    }
    catch (err) {
        return {
            isAuth: false,
        };
    }
    if (!!!decodeToken) {
        return {
            isAuth: false,
        };
    }
    // Success message
    request.res.status(200);
    return {
        isAuth: true,
        userId: decodeToken.userId,
    };
});
