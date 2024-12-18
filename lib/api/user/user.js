"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersWithinCountry = exports.postRegisterUser = void 0;
var axiosClient_1 = require("../libs/axiosClient");
var URLS = {
    USER: "/api/v1/user",
    usersWithinCountry: function (permissions) {
        var params = new URLSearchParams({ permissions: permissions.toString() });
        return "/api/v1/user/filter?".concat(params.toString());
    },
};
var postRegisterUser = function (data) {
    return axiosClient_1.axiosClient.post(URLS.USER, data);
};
exports.postRegisterUser = postRegisterUser;
var getUsersWithinCountry = function (permissions) {
    return axiosClient_1.axiosClient.get(URLS.usersWithinCountry(permissions));
};
exports.getUsersWithinCountry = getUsersWithinCountry;
