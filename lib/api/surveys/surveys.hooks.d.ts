import { BoundingBoxRequest } from './surveys.types';
export declare function useCreateSurvey(): import("@tanstack/react-query").UseMutationResult<import("axios").AxiosResponse<import("./surveys.types").ApiResponseSurvey, any>, Error, import("./surveys.types").SurveyRequest, unknown>;
export declare function useFileUpload(): import("@tanstack/react-query").UseMutationResult<import("axios").AxiosResponse<import("./surveys.types").UploadFileReponse, any>, Error, FormData, unknown>;
export declare function useGetSurveyByLocation(x: any, y: any): import("@tanstack/react-query").UseQueryResult<import("./surveys.types").Survey | undefined, Error>;
export declare function useGetAllSurveysWithinRadius(x: any, y: any, radius: any): import("@tanstack/react-query").UseQueryResult<import("./surveys.types").Survey[] | undefined, Error>;
export declare function useGetAllSurveys(): import("@tanstack/react-query").UseQueryResult<import("./surveys.types").Survey[] | undefined, Error>;
export declare function useGetSurveysWithinBoundingBox({ minX, maxX, minY, maxY, categories, }: BoundingBoxRequest): import("@tanstack/react-query").UseQueryResult<import("./surveys.types").Survey[] | undefined, Error>;
export declare function useGetUsersSurveys(): import("@tanstack/react-query").UseQueryResult<import("./surveys.types").Survey[] | undefined, Error>;
export declare function useUpdateSurveyStatus(): import("@tanstack/react-query").UseMutationResult<import("axios").AxiosResponse<import("./surveys.types").ApiResponseListSurvey, any>, Error, import("./surveys.types").UpdateSurveyStatusRequest, unknown>;
