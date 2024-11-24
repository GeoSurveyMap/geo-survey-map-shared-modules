"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRegisterUser = void 0;
var react_query_1 = require("@tanstack/react-query");
var user_1 = require("./user");
var useRegisterUser = function () {
    return (0, react_query_1.useMutation)({
        mutationFn: user_1.postRegisterUser,
    });
};
exports.useRegisterUser = useRegisterUser;
