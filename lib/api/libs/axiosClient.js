"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApiClient = exports.axiosClient = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var axios_1 = __importDefault(require("axios"));
exports.axiosClient = axios_1.default.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
var setAuthenticationHeader = function (token) {
    exports.axiosClient.defaults.headers.common.Authorization = "Bearer ".concat(token);
};
var removeAuthenticationHeader = function () {
    delete exports.axiosClient.defaults.headers.common.Authentication;
};
var setBaseURL = function (url) {
    exports.axiosClient.defaults.baseURL = url;
};
exports.updateApiClient = {
    setAuthenticationHeader: setAuthenticationHeader,
    removeAuthenticationHeader: removeAuthenticationHeader,
    setBaseURL: setBaseURL,
};
