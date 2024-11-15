"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSurveysWithinBoundingBox = exports.getAllSurveys = exports.getAllSurveysWithinRadius = exports.getSurveyByLocation = exports.createSurvey = exports.URLS = void 0;
var axiosClient_1 = require("../libs/axiosClient");
exports.URLS = {
    SURVEY: '/api/v1/survey',
    createSurvey: function (filePath) {
        var params = new URLSearchParams(filePath ? { filePath: filePath } : {});
        return "/api/v1/survey/create?".concat(params.toString());
    },
    ALL_SURVEYS: "/api/v1/survey/all",
    BOUNDING_BOX: "/api/v1/survey/bounding-box",
    UPLOAD_FILE: '/api/v1/survey/upload',
    surveysByLocation: function (x, y) { return "/api/v1/survey/x/".concat(x, "/y/").concat(y); },
    surveysWithinRadius: function (x, y, radius) {
        var params = new URLSearchParams({ radius: radius.toString() });
        return exports.URLS.surveysByLocation(x, y) + "?".concat(params.toString());
    },
};
// Create a new survey
function createSurvey(data) {
    var filePath = data.filePath;
    delete data.filePath;
    return axiosClient_1.axiosClient.post(exports.URLS.createSurvey(filePath), data);
}
exports.createSurvey = createSurvey;
// Get survey by location
function getSurveyByLocation(_a) {
    var x = _a.x, y = _a.y;
    return axiosClient_1.axiosClient.get(exports.URLS.surveysByLocation(x, y));
}
exports.getSurveyByLocation = getSurveyByLocation;
// Get all surveys within a given radius in meters
function getAllSurveysWithinRadius(_a) {
    var x = _a.x, y = _a.y, radius = _a.radius;
    return axiosClient_1.axiosClient.get(exports.URLS.surveysWithinRadius(x, y, radius));
}
exports.getAllSurveysWithinRadius = getAllSurveysWithinRadius;
// Get all existing surveys
function getAllSurveys() {
    return axiosClient_1.axiosClient.get(exports.URLS.ALL_SURVEYS);
}
exports.getAllSurveys = getAllSurveys;
// Get all surveys within a bounding box
function getSurveysWithinBoundingBox(_a) {
    var minX = _a.minX, maxX = _a.maxX, minY = _a.minY, maxY = _a.maxY, categories = _a.categories;
    return axiosClient_1.axiosClient.get(exports.URLS.BOUNDING_BOX, {
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
