"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSurveysWithinBoundingBox = exports.getAllSurveys = exports.getAllSurveysWithinRadius = exports.getSurveyByLocation = exports.createSurvey = void 0;
var axiosClient_1 = require("../libs/axiosClient");
var URLS = {
    SURVEY: '/api/v1/survey',
    createSurvey: function (kindeId) { return "/api/v1/survey/".concat(kindeId, "/create"); },
    ALL_SURVEYS: "/api/v1/survey/all",
    BOUNDING_BOX: "/api/v1/survey/bounding-box",
    surveysByLocation: function (x, y) { return "/api/v1/survey/x/".concat(x, "/y/").concat(y); },
    surveysWithinRadius: function (x, y, radius) {
        return URLS.surveysByLocation(x, y) + "/radius/".concat(radius);
    },
};
// Create a new survey
function createSurvey(kindeId, data) {
    return axiosClient_1.axiosClient.post(URLS.createSurvey(kindeId), data);
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
// Get all surveys within a bounding box
function getSurveysWithinBoundingBox(_a) {
    var minX = _a.minX, maxX = _a.maxX, minY = _a.minY, maxY = _a.maxY, categories = _a.categories;
    return axiosClient_1.axiosClient.get(URLS.BOUNDING_BOX, {
        params: {
            minX: minX,
            maxX: maxX,
            minY: minY,
            maxY: maxY,
            categories: categories,
        },
    });
}
exports.getSurveysWithinBoundingBox = getSurveysWithinBoundingBox;
