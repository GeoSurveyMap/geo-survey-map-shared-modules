import { PostRegisterUserRequest, GetUsersResponse, Permissions, UpdateUserPermissionsRequest, BanOrReactivateUserRequest } from './user.types';
export declare const postRegisterUser: (data: PostRegisterUserRequest) => Promise<import("axios").AxiosResponse<number, any>>;
export declare const getAllUsers: () => Promise<import("axios").AxiosResponse<GetUsersResponse, any>>;
export declare const getUsersWithinCountry: (permissions: Permissions) => Promise<import("axios").AxiosResponse<GetUsersResponse, any>>;
export declare function setUserPermissions(data: UpdateUserPermissionsRequest): Promise<import("axios").AxiosResponse<GetUsersResponse, any>>;
export declare function deleteUser(data: UpdateUserPermissionsRequest): Promise<import("axios").AxiosResponse<GetUsersResponse, any>>;
export declare function banOrReactivateUser(data: BanOrReactivateUserRequest): Promise<import("axios").AxiosResponse<GetUsersResponse, any>>;
