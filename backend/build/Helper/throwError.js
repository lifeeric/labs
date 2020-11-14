"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (mesg, err, array) {
    if (err === void 0) { err = true; }
    return Array.isArray(array)
        ? [
            {
                __typename: "Error",
                error: err,
                message: mesg,
            },
        ]
        : {
            __typename: "Error",
            error: err,
            message: mesg,
        };
});
