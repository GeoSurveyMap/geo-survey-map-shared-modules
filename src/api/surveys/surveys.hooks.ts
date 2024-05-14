import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createSurvey,
  getAllSurveys,
  getAllSurveysWithinRadius,
  getSurveyByLocation,
} from './surveys';
import { queryKeys } from '../libs/query';

// Custom hook for creating a new survey
export function useCreateSurvey() {
  return useMutation({ mutationFn: createSurvey });
}

// Custom hook for fetching a survey by location
export function useGetSurveyByLocation(x, y) {
  return useQuery({
    queryKey: queryKeys.survey.byLocation(x, y),
    queryFn: () => getSurveyByLocation({ x, y }),
    select: ({ data }) => data.data,
  });
}

// Custom hook for fetching all surveys within a given radius
export function useGetAllSurveysWithinRadius(x, y, radius) {
  return useQuery({
    queryKey: queryKeys.survey.withinRadius(x, y, radius),
    queryFn: () => getAllSurveysWithinRadius({ x, y, radius }),
    select: ({ data }) => data.data,
  });
}

// Custom hook for fetching all existing surveys
export function useGetAllSurveys() {
  return useQuery({
    queryKey: queryKeys.survey.all,
    queryFn: getAllSurveys,
    select: ({ data }) => data.data,
  });
}
