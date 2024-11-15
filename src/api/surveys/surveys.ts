import {
  ApiResponseListSurvey,
  ApiResponseSurvey,
  BoundingBoxRequest,
  LocationRequest,
  RadiusRequest,
  SurveyRequest,
} from './surveys.types';
import { axiosClient } from '../libs/axiosClient';

const URLS = {
  SURVEY: '/api/v1/survey',
  createSurvey: (filePath?: string) => {
    const params = new URLSearchParams(filePath ? { filePath } : {});
    return `/api/v1/survey/create?${params.toString()}`;
  },
  ALL_SURVEYS: `/api/v1/survey/all`,
  BOUNDING_BOX: `/api/v1/survey/bounding-box`,
  surveysByLocation: (x: number, y: number) => `/api/v1/survey/x/${x}/y/${y}`,
  surveysWithinRadius: (x: number, y: number, radius: number) => {
    const params = new URLSearchParams({ radius: radius.toString() });
    return URLS.surveysByLocation(x, y) + `?${params.toString()}`;
  },
};

// Create a new survey
export function createSurvey(data: SurveyRequest, filePath?: string) {
  return axiosClient.post<ApiResponseSurvey>(URLS.createSurvey(filePath), data);
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

// Get all surveys within a bounding box
export function getSurveysWithinBoundingBox({
  minX,
  maxX,
  minY,
  maxY,
  categories,
}: BoundingBoxRequest) {
  return axiosClient.get<ApiResponseListSurvey>(URLS.BOUNDING_BOX, {
    params: {
      minX,
      maxX,
      minY,
      maxY,
      categories,
    },
  });
}
