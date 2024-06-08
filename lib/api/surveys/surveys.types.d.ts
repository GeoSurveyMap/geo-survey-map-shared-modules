import { Category } from '../../types';
export interface Location {
    /** @format double */
    x: number;
    /** @format double */
    y: number;
    name?: string;
}
export interface LocationRequest extends Location {
}
export interface RadiusRequest extends LocationRequest {
    /** @format double */
    radius: number;
}
export interface SurveyRequest {
    category: Category;
    description: string;
    solution: string;
    locationRequest: LocationRequest;
    /** @format double */
    affectedArea: number;
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
export interface BoundingBoxRequest {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    categories?: Category[];
}
