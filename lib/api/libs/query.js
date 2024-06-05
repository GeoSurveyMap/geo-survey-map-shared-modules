"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryKeys = exports.clearQueryCache = exports.TanstackQueryProvider = exports.queryClient = void 0;
var react_query_1 = require("@tanstack/react-query");
exports.queryClient = new react_query_1.QueryClient();
exports.TanstackQueryProvider = (0, react_query_1.QueryClientProvider)({ client: exports.queryClient });
var clearQueryCache = function () {
    exports.queryClient.clear();
};
exports.clearQueryCache = clearQueryCache;
exports.queryKeys = {
    survey: {
        all: ['allSurveys'],
        byLocation: function (x, y) { return ['survey', x, y]; },
        withinRadius: function (x, y, radius) { return ['surveys', x, y, radius]; },
        withinBoundingBox: function (minX, maxX, minY, maxY, categories) { return ['surveys', minX, maxX, minY, maxY, categories]; },
    },
};
