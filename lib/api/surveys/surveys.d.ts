import { ApiResponseListSurvey, ApiResponseSurvey, BoundingBoxRequest, LocationRequest, RadiusRequest, SurveyRequest } from './surveys.types';
export declare function createSurvey(kindeId: string, data: SurveyRequest): Promise<import("axios").AxiosResponse<ApiResponseSurvey, any>>;
export declare function getSurveyByLocation({ x, y }: LocationRequest): Promise<import("axios").AxiosResponse<ApiResponseSurvey, any>>;
export declare function getAllSurveysWithinRadius({ x, y, radius }: RadiusRequest): Promise<import("axios").AxiosResponse<ApiResponseListSurvey, any>>;
export declare function getAllSurveys(): Promise<import("axios").AxiosResponse<ApiResponseListSurvey, any>>;
export declare function getSurveysWithinBoundingBox({ minX, maxX, minY, maxY, categories, }: BoundingBoxRequest): Promise<import("axios").AxiosResponse<ApiResponseListSurvey, any>>;
