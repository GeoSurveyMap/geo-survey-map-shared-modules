"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRegisterUser = void 0;
var axiosClient_1 = require("../libs/axiosClient");
var URLS = {
    USER: "/api/v1/user",
};
var postRegisterUser = function (data) {
    return axiosClient_1.axiosClient.post(URLS.USER, data);
};
exports.postRegisterUser = postRegisterUser;
