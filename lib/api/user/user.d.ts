import { PostRegisterUserRequest, GetUsersWithinCountryRequest, GetUsersWithinCountryResponse } from './user.types';
export declare const postRegisterUser: (data: PostRegisterUserRequest) => Promise<import("axios").AxiosResponse<number, any>>;
export declare const getUsersWithinCountry: ({ permissions }: GetUsersWithinCountryRequest) => Promise<import("axios").AxiosResponse<GetUsersWithinCountryResponse, any>>;
