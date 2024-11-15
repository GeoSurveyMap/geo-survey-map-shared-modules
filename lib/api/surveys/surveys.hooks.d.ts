import { BoundingBoxRequest, SurveyRequest } from './surveys.types';
export declare function useCreateSurvey(): import("@tanstack/react-query").UseMutationResult<import("axios").AxiosResponse<import("./surveys.types").ApiResponseSurvey, any>, Error, SurveyRequest, unknown>;
export declare function useGetSurveyByLocation(x: any, y: any): import("@tanstack/react-query").UseQueryResult<import("./surveys.types").Survey | undefined, Error>;
export declare function useGetAllSurveysWithinRadius(x: any, y: any, radius: any): import("@tanstack/react-query").UseQueryResult<import("./surveys.types").Survey[] | undefined, Error>;
export declare function useGetAllSurveys(): import("@tanstack/react-query").UseQueryResult<import("./surveys.types").Survey[] | undefined, Error>;
export declare function useGetSurveysWithinBoundingBox({ minX, maxX, minY, maxY, categories, }: BoundingBoxRequest): import("@tanstack/react-query").UseQueryResult<import("./surveys.types").Survey[] | undefined, Error>;
