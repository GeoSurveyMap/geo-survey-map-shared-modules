import { Permissions } from './user.types';
export declare const useRegisterUser: () => import("@tanstack/react-query").UseMutationResult<import("axios").AxiosResponse<number, any>, Error, import("./user.types").PostRegisterUserRequest, unknown>;
export declare function useGetAllUsers(): import("@tanstack/react-query").UseQueryResult<Omit<import("./user.types").User, "id">[] | undefined, Error>;
export declare function useGetUsersWithinCountry(permissions: Permissions): import("@tanstack/react-query").UseQueryResult<Omit<import("./user.types").User, "id">[] | undefined, Error>;
