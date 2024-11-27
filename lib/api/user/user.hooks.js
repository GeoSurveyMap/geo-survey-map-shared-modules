"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRegisterUser = void 0;
var react_query_1 = require("@tanstack/react-query");
var user_1 = require("./user");
var query_1 = require("../../api/libs/query");
var useRegisterUser = function () {
    return (0, react_query_1.useMutation)({
        mutationFn: user_1.postRegisterUser,
        onSuccess: function () {
            query_1.queryClient.invalidateQueries({ queryKey: [query_1.queryKeys.survey.user] });
        },
    });
};
exports.useRegisterUser = useRegisterUser;
