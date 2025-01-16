import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createSurvey,
  getAllSurveys,
  getAllSurveysWithinRadius,
  getSurveyByLocation,
  getSurveysReport,
  getSurveysWithinBoundingBox,
  getUsersSurveys,
  postUploadFile,
  updateSurveyStatus,
} from './surveys';
import { queryClient, queryKeys } from '../libs/query';
import { BoundingBoxRequest } from './surveys.types';

// Custom hook for creating a new survey
export function useCreateSurvey() {
  return useMutation({
    mutationFn: createSurvey,
    onSuccess: ({ data: { data } }) => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.survey.all, queryKeys.survey.user] });

      if (data?.location?.x && data?.location?.y) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.survey.byLocation(data.location.x, data.location.y),
        });
      }
    },
  });
}

// Custom hook for uploading a file
export function useFileUpload() {
  return useMutation({
    mutationFn: postUploadFile,
  });
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

export function useGetSurveysWithinBoundingBox({
  minX,
  maxX,
  minY,
  maxY,
  categories,
}: BoundingBoxRequest) {
  return useQuery({
    queryKey: queryKeys.survey.withinBoundingBox(minX, maxX, minY, maxY, categories),
    queryFn: () => getSurveysWithinBoundingBox({ minX, maxX, minY, maxY, categories }),
    select: ({ data }) => data.data,
  });
}

export function useGetUsersSurveys() {
  return useQuery({
    queryKey: queryKeys.survey.user,
    queryFn: getUsersSurveys,
    select: ({ data }) => data.data,
  });
}

export function useUpdateSurveyStatus() {
	return useMutation({
	  mutationFn: updateSurveyStatus,
	  onSuccess: ({ data: { data } }) => {
		queryClient.invalidateQueries({ queryKey: [queryKeys.survey.all, queryKeys.survey.user] });
	  },
	});
}

// Custom hook for fetching all existing surveys
export function useGetSurveysReport() {
	return useQuery({
	  queryKey: queryKeys.survey.report,
	  queryFn: getSurveysReport,
	  select: ({ data }) => data.data,
	});
  }
