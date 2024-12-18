"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.banOrReactivateUser = exports.deleteUser = exports.setUserPermissions = exports.getUsersWithinCountry = exports.getAllUsers = exports.postRegisterUser = void 0;
var axiosClient_1 = require("../libs/axiosClient");
var URLS = {
    USER: "/api/v1/user",
    ALL: "/api/v1/user/filter",
    usersWithinCountry: function (permissions) {
        var params = new URLSearchParams({ permissions: permissions.toString() });
        return "/api/v1/user/filter?".concat(params.toString());
    },
    updatePermissions: function (kindeId, permissions) {
        var params = new URLSearchParams({ permissions: permissions.toString() });
        return "/api/v1/user/update/".concat(kindeId, "?").concat(params.toString());
    },
    delete: function (kindeId) {
        var params = new URLSearchParams({ kindeId: kindeId.toString() });
        return "/users/".concat(params.toString(), "/delete");
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
var getUsersWithinCountry = function (permissions) {
    return axiosClient_1.axiosClient.get(URLS.usersWithinCountry(permissions));
};
exports.getUsersWithinCountry = getUsersWithinCountry;
function setUserPermissions(data) {
    var kindeId = data.kindeId, permissions = data.permissions;
    return axiosClient_1.axiosClient.put(URLS.updatePermissions(kindeId, permissions));
}
exports.setUserPermissions = setUserPermissions;
function deleteUser(data) {
    var kindeId = data.kindeId;
    return axiosClient_1.axiosClient.delete(URLS.delete(kindeId));
}
exports.deleteUser = deleteUser;
function banOrReactivateUser(data) {
    var kindeId = data.kindeId, status = data.status;
    return axiosClient_1.axiosClient.delete(URLS.banOrReactivate(kindeId, status));
}
exports.banOrReactivateUser = banOrReactivateUser;
