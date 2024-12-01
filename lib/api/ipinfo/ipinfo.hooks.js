"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetCountry = void 0;
var react_query_1 = require("@tanstack/react-query");
var ipinfo_1 = require("./ipinfo");
var query_1 = require("../../api/libs/query");
function useGetCountry(token) {
    return (0, react_query_1.useQuery)({
        queryKey: query_1.queryKeys.ipInfo.country,
        queryFn: function () { return (0, ipinfo_1.getConnectionInfo)(token); },
        select: function (_a) {
            var data = _a.data;
            return data.country;
        }
    });
}
exports.useGetCountry = useGetCountry;
