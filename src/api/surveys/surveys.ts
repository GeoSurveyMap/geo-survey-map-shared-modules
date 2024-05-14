import {
  ApiResponseListSurvey,
  ApiResponseSurvey,
  LocationRequest,
  RadiusRequest,
  SurveyRequest,
} from './surveys.types';
import { axiosClient } from '../libs/axiosClient';

const URLS = {
  SURVEY: '/survey',
  ALL_SURVEYS: '/survey/all',
  surveysByLocation: (x: number, y: number) => `/survey/x/${x}/y/${y}`,
  surveysWithinRadius: (x: number, y: number, radius) =>
    URLS.surveysByLocation(x, y) + `/radius/${radius}`,
};

// Create a new survey
export function createSurvey(data: SurveyRequest) {
  return axiosClient.post<ApiResponseSurvey>(URLS.SURVEY, data);
}

// Get survey by location
export function getSurveyByLocation({ x, y }: LocationRequest) {
  return axiosClient.get<ApiResponseSurvey>(URLS.surveysByLocation(x, y));
}

// Get all surveys within a given radius in meters
export function getAllSurveysWithinRadius({ x, y, radius }: RadiusRequest) {
  return axiosClient.get<ApiResponseListSurvey>(URLS.surveysWithinRadius(x, y, radius));
}

// Get all existing surveys
export function getAllSurveys() {
  return axiosClient.get<ApiResponseListSurvey>(URLS.ALL_SURVEYS);
}
