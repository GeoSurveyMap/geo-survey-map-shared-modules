"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSurveys = exports.getAllSurveysWithinRadius = exports.getSurveyByLocation = exports.createSurvey = void 0;
var axiosClient_1 = require("../libs/axiosClient");
var URLS = {
    SURVEY: '/api/v1/survey',
    ALL_SURVEYS: "/api/v1/survey/all",
    surveysByLocation: function (x, y) { return "/api/v1/survey/x/".concat(x, "/y/").concat(y); },
    surveysWithinRadius: function (x, y, radius) {
        return URLS.surveysByLocation(x, y) + "/radius/".concat(radius);
    },
};
// Create a new survey
function createSurvey(data) {
    return axiosClient_1.axiosClient.post(URLS.SURVEY, data);
}
exports.createSurvey = createSurvey;
// Get survey by location
function getSurveyByLocation(_a) {
    var x = _a.x, y = _a.y;
    return axiosClient_1.axiosClient.get(URLS.surveysByLocation(x, y));
}
exports.getSurveyByLocation = getSurveyByLocation;
// Get all surveys within a given radius in meters
function getAllSurveysWithinRadius(_a) {
    var x = _a.x, y = _a.y, radius = _a.radius;
    return axiosClient_1.axiosClient.get(URLS.surveysWithinRadius(x, y, radius));
}
exports.getAllSurveysWithinRadius = getAllSurveysWithinRadius;
// Get all existing surveys
function getAllSurveys() {
    return axiosClient_1.axiosClient.get(URLS.ALL_SURVEYS);
}
exports.getAllSurveys = getAllSurveys;
