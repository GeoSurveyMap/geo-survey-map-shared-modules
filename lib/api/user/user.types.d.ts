import { ApiResponseMetadata } from 'api/surveys/surveys.types';
type UserId = number;
export type UserStatus = 'ACTIVE' | 'BANNED';
export interface User {
    id: UserId;
    kindeId: string;
    email: string;
    status: UserStatus;
    permissions?: Permissions[];
}
export declare enum Role {
    ROLE_ADMIN = "ROLE_ADMIN",
    ROLE_USER = "ROLE_USER",
    ROLE_PRO = "ROLE_PRO"
}
export declare enum Permissions {
    POLAND = "PL",
    GERMANY = "DE",
    BELGIUM = "BE",
    SWEDEN = "SE",
    AUSTRIA = "AT",
    ITALY = "IT",
    SPAIN = "ES",
    IRELAND = "IE",
    SLOVAKIA = "SK",
    NETHERLANDS = "NL",
    SERBIA = "RS",
    LITHUANIA = "LT",
    TURKEY = "TR",
    GREECE = "GR",
    GREAT_BRITAIN = "GB",
    HUNGARY = "HU"
}
export type PostRegisterUserRequest = Omit<User, 'id' | 'status'>;
export type PostRegisterUserResponse = UserId;
export interface UpdateUserPermissionsRequest {
    permissions: Permissions[];
    kindeId: string;
}
export type GetUsersResponse = {
    data?: Omit<User, 'id'>[];
    metadata: ApiResponseMetadata;
};
export type GetSelfUserResponse = {
    data?: Omit<User, 'id'>;
    metadata: ApiResponseMetadata;
};
export interface BanOrReactivateUserRequest {
    kindeId: string;
    status: UserStatus;
}
export {};
