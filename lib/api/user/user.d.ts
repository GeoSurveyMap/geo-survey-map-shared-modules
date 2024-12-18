import { PostRegisterUserRequest, GetUsersResponse, Permissions } from './user.types';
export declare const postRegisterUser: (data: PostRegisterUserRequest) => Promise<import("axios").AxiosResponse<number, any>>;
export declare const getAllUsers: () => Promise<import("axios").AxiosResponse<GetUsersResponse, any>>;
export declare const getUsersWithinCountry: (permissions: Permissions) => Promise<import("axios").AxiosResponse<GetUsersResponse, any>>;
