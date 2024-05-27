export interface Location {
    /** @format double */
    x: number;
    /** @format double */
    y: number;
}
export interface LocationRequest extends Location {
}
export interface RadiusRequest extends LocationRequest {
    /** @format double */
    radius: number;
}
export declare enum Category {
    DRY_SOILS = "DRY_SOILS",
    WET_SOILS = "WET_SOILS",
    EROSION = "EROSION",
    SEALED_SOILS = "SEALED_SOILS",
    DEGRADATION = "DEGRADATION",
    LOSS_OF_ORGANIC_MATTER = "LOSS_OF_ORGANIC_MATTER",
    PH = "PH",
    BIODIVERSITY = "BIODIVERSITY"
}
export interface SurveyRequest {
    category: Category;
    description: string;
    solution: string;
    locationRequest: LocationRequest;
}
export interface ApiResponseError {
    /** @format int32 */
    httpStatusCode: number;
    message: string;
    errors: ApiResponseErrorElement[];
}
export interface ApiResponseErrorElement {
    key: string;
    cause: string;
    value?: object;
}
export interface ApiResponseMetadata {
    error?: ApiResponseError;
    paging?: ApiResponsePaging;
    threadId?: string;
    assistantId?: string;
    /** @format date-time */
    processingStart: string;
    /** @format date-time */
    processingEnd: string;
    processingDuration: string;
}
export interface ApiResponsePaging {
    /** @format int32 */
    totalPages: number;
    /** @format int64 */
    totalElements: number;
    /** @format int32 */
    page: number;
    /** @format int32 */
    pageSize: number;
}
export interface ApiResponseSurvey {
    data?: Survey;
    metadata: ApiResponseMetadata;
}
export interface Survey {
    /** @format int64 */
    id?: number;
    category: Category;
    description: string;
    solution: string;
    location: Location;
}
export interface ApiResponseListSurvey {
    data?: Survey[];
    metadata: ApiResponseMetadata;
}
