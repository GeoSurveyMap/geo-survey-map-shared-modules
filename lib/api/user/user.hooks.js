"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeleteUserSelf = exports.useBanOrReactivateUser = exports.useSetUserPermissions = exports.useGetUsersWithinCountry = exports.useGetAllUsers = exports.useRegisterUser = void 0;
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
// Custom hook for fetching all users
function useGetAllUsers() {
    return (0, react_query_1.useQuery)({
        queryKey: query_1.queryKeys.users.all,
        queryFn: function () { return (0, user_1.getAllUsers)(); },
        select: function (_a) {
            var data = _a.data;
            return data.data;
        },
    });
}
exports.useGetAllUsers = useGetAllUsers;
// Custom hook for fetching users within a given country permissions
function useGetUsersWithinCountry(permissions) {
    return (0, react_query_1.useQuery)({
        queryKey: query_1.queryKeys.users.withinCountry(permissions),
        queryFn: function () { return (0, user_1.getUsersWithinCountry)(permissions); },
        select: function (_a) {
            var data = _a.data;
            return data.data;
        },
    });
}
exports.useGetUsersWithinCountry = useGetUsersWithinCountry;
// Custom hook for setting user permissions
function useSetUserPermissions() {
    return (0, react_query_1.useMutation)({
        mutationFn: user_1.setUserPermissions,
        onSuccess: function () {
            query_1.queryClient.invalidateQueries({ queryKey: [query_1.queryKeys.users.all, query_1.queryKeys.users.withinCountry] });
        },
    });
}
exports.useSetUserPermissions = useSetUserPermissions;
// Custom hook for banning or reactivating a user
function useBanOrReactivateUser() {
    return (0, react_query_1.useMutation)({
        mutationFn: user_1.banOrReactivateUser,
        onSuccess: function () {
            query_1.queryClient.invalidateQueries({ queryKey: [query_1.queryKeys.users.all, query_1.queryKeys.users.withinCountry] });
        },
    });
}
exports.useBanOrReactivateUser = useBanOrReactivateUser;
// Custom hook for self deleting account
function useDeleteUserSelf() {
    return (0, react_query_1.useMutation)({
        mutationFn: user_1.deleteUserSelf,
        onSuccess: function () {
            query_1.queryClient.invalidateQueries({ queryKey: [query_1.queryKeys.users.all, query_1.queryKeys.users.withinCountry] });
        },
    });
}
exports.useDeleteUserSelf = useDeleteUserSelf;
