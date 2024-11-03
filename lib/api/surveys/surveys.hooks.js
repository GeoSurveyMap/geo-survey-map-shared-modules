"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetSurveysWithinBoundingBox = exports.useGetAllSurveys = exports.useGetAllSurveysWithinRadius = exports.useGetSurveyByLocation = exports.useCreateSurvey = void 0;
var react_query_1 = require("@tanstack/react-query");
var surveys_1 = require("./surveys");
var query_1 = require("../libs/query");
// Custom hook for creating a new survey
function useCreateSurvey(kindeId) {
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, surveys_1.createSurvey)(kindeId, data); },
        onSuccess: function (_a) {
            var _b, _c;
            var data = _a.data.data;
            query_1.queryClient.invalidateQueries({ queryKey: query_1.queryKeys.survey.all });
            if (((_b = data === null || data === void 0 ? void 0 : data.location) === null || _b === void 0 ? void 0 : _b.x) && ((_c = data === null || data === void 0 ? void 0 : data.location) === null || _c === void 0 ? void 0 : _c.y)) {
                query_1.queryClient.invalidateQueries({
                    queryKey: query_1.queryKeys.survey.byLocation(data.location.x, data.location.y),
                });
            }
        },
    });
}
exports.useCreateSurvey = useCreateSurvey;
// Custom hook for fetching a survey by location
function useGetSurveyByLocation(x, y) {
    return (0, react_query_1.useQuery)({
        queryKey: query_1.queryKeys.survey.byLocation(x, y),
        queryFn: function () { return (0, surveys_1.getSurveyByLocation)({ x: x, y: y }); },
        select: function (_a) {
            var data = _a.data;
            return data.data;
        },
    });
}
exports.useGetSurveyByLocation = useGetSurveyByLocation;
// Custom hook for fetching all surveys within a given radius
function useGetAllSurveysWithinRadius(x, y, radius) {
    return (0, react_query_1.useQuery)({
        queryKey: query_1.queryKeys.survey.withinRadius(x, y, radius),
        queryFn: function () { return (0, surveys_1.getAllSurveysWithinRadius)({ x: x, y: y, radius: radius }); },
        select: function (_a) {
            var data = _a.data;
            return data.data;
        },
    });
}
exports.useGetAllSurveysWithinRadius = useGetAllSurveysWithinRadius;
// Custom hook for fetching all existing surveys
function useGetAllSurveys() {
    return (0, react_query_1.useQuery)({
        queryKey: query_1.queryKeys.survey.all,
        queryFn: surveys_1.getAllSurveys,
        select: function (_a) {
            var data = _a.data;
            return data.data;
        },
    });
}
exports.useGetAllSurveys = useGetAllSurveys;
function useGetSurveysWithinBoundingBox(_a) {
    var minX = _a.minX, maxX = _a.maxX, minY = _a.minY, maxY = _a.maxY, categories = _a.categories;
    return (0, react_query_1.useQuery)({
        queryKey: query_1.queryKeys.survey.withinBoundingBox(minX, maxX, minY, maxY, categories),
        queryFn: function () { return (0, surveys_1.getSurveysWithinBoundingBox)({ minX: minX, maxX: maxX, minY: minY, maxY: maxY, categories: categories }); },
        select: function (_a) {
            var data = _a.data;
            return data.data;
        },
    });
}
exports.useGetSurveysWithinBoundingBox = useGetSurveysWithinBoundingBox;
