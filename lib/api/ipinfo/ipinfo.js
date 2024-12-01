"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnectionInfo = void 0;
var axiosClient_1 = require("../libs/axiosClient");
var getConnectionInfo = function (token) {
    var params = new URLSearchParams({ token: token });
    axiosClient_1.updateApiClient.setBaseURL("https://ipinfo.io?".concat(params.toString()));
    return axiosClient_1.axiosClient.get('');
};
exports.getConnectionInfo = getConnectionInfo;
