"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetAllSurveys = exports.useGetAllSurveysWithinRadius = exports.useGetSurveyByLocation = exports.useCreateSurvey = void 0;
var react_query_1 = require("@tanstack/react-query");
var surveys_1 = require("./surveys");
var query_1 = require("../libs/query");
// Custom hook for creating a new survey
function useCreateSurvey() {
    return (0, react_query_1.useMutation)({ mutationFn: surveys_1.createSurvey });
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
