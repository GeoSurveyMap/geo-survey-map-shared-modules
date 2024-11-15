import { ApiResponseListSurvey, ApiResponseSurvey, BoundingBoxRequest, LocationRequest, RadiusRequest, SurveyRequest } from './surveys.types';
export declare const URLS: {
    SURVEY: string;
    createSurvey: (filePath?: string) => string;
    ALL_SURVEYS: string;
    BOUNDING_BOX: string;
    UPLOAD_FILE: string;
    surveysByLocation: (x: number, y: number) => string;
    surveysWithinRadius: (x: number, y: number, radius: number) => string;
};
export declare function createSurvey(data: SurveyRequest): Promise<import("axios").AxiosResponse<ApiResponseSurvey, any>>;
export declare function getSurveyByLocation({ x, y }: LocationRequest): Promise<import("axios").AxiosResponse<ApiResponseSurvey, any>>;
export declare function getAllSurveysWithinRadius({ x, y, radius }: RadiusRequest): Promise<import("axios").AxiosResponse<ApiResponseListSurvey, any>>;
export declare function getAllSurveys(): Promise<import("axios").AxiosResponse<ApiResponseListSurvey, any>>;
export declare function getSurveysWithinBoundingBox({ minX, maxX, minY, maxY, categories, }: BoundingBoxRequest): Promise<import("axios").AxiosResponse<ApiResponseListSurvey, any>>;
