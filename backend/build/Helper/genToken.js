"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var privateKey = fs_1.default.readFileSync(path_1.default.join(__dirname + "/labkey.pem"), "utf8");
exports.default = (function (email, user, secretKey, expires) {
    if (secretKey === void 0) { secretKey = privateKey; }
    if (expires === void 0) { expires = 2592000; }
    var token = jsonwebtoken_1.default.sign({
        userId: user._id,
        email: email,
    }, secretKey, {
        expiresIn: expires,
    });
    return token;
});
