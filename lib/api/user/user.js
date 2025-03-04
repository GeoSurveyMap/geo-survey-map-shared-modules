"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.banOrReactivateUser = exports.deleteUserSelf = exports.setUserPermissions = exports.getUsersWithinCountry = exports.getSelfUserData = exports.getAllUsers = exports.postRegisterUser = void 0;
var axiosClient_1 = require("../libs/axiosClient");
var URLS = {
    USER: "/api/v1/user",
    ALL: "/api/v1/user/filter",
    DELETE_SELF: "/api/v1/user/self",
    GET_SELF: "/api/v1/user/self",
    usersWithinCountry: function (permissions) {
        var params = new URLSearchParams({ permissions: permissions.toString() });
        return "/api/v1/user/filter?".concat(params.toString());
    },
    updatePermissions: function (kindeId, permissions) {
        var params = new URLSearchParams({ permissions: permissions.toString() });
        return "/api/v1/user/update/".concat(kindeId, "?").concat(params.toString());
    },
    banOrReactivate: function (kindeId, userStatus) {
        return "/users/".concat(kindeId, "/status/").concat(userStatus);
    }
};
var postRegisterUser = function (data) {
    return axiosClient_1.axiosClient.post(URLS.USER, data);
};
exports.postRegisterUser = postRegisterUser;
var getAllUsers = function () {
    return axiosClient_1.axiosClient.get(URLS.ALL);
};
exports.getAllUsers = getAllUsers;
var getSelfUserData = function () {
    return axiosClient_1.axiosClient.get(URLS.GET_SELF);
};
exports.getSelfUserData = getSelfUserData;
var getUsersWithinCountry = function (permissions) {
    return axiosClient_1.axiosClient.get(URLS.usersWithinCountry(permissions));
};
exports.getUsersWithinCountry = getUsersWithinCountry;
function setUserPermissions(data) {
    var kindeId = data.kindeId, permissions = data.permissions;
    return axiosClient_1.axiosClient.put(URLS.updatePermissions(kindeId, permissions));
}
exports.setUserPermissions = setUserPermissions;
function deleteUserSelf() {
    return axiosClient_1.axiosClient.delete(URLS.DELETE_SELF);
}
exports.deleteUserSelf = deleteUserSelf;
function banOrReactivateUser(data) {
    var kindeId = data.kindeId, status = data.status;
    return axiosClient_1.axiosClient.delete(URLS.banOrReactivate(kindeId, status));
}
exports.banOrReactivateUser = banOrReactivateUser;
