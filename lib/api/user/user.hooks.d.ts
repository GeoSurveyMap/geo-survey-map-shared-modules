import { Permissions } from './user.types';
export declare const useRegisterUser: () => import("@tanstack/react-query").UseMutationResult<import("axios").AxiosResponse<number, any>, Error, import("./user.types").PostRegisterUserRequest, unknown>;
export declare function useGetAllUsers(): import("@tanstack/react-query").UseQueryResult<Omit<import("./user.types").User, "id">[] | undefined, Error>;
export declare function useGetSelfUserData(): import("@tanstack/react-query").UseQueryResult<Omit<import("./user.types").User, "id">[] | undefined, Error>;
export declare function useGetUsersWithinCountry(permissions: Permissions): import("@tanstack/react-query").UseQueryResult<Omit<import("./user.types").User, "id">[] | undefined, Error>;
export declare function useSetUserPermissions(): import("@tanstack/react-query").UseMutationResult<import("axios").AxiosResponse<import("./user.types").GetUsersResponse, any>, Error, import("./user.types").UpdateUserPermissionsRequest, unknown>;
export declare function useBanOrReactivateUser(): import("@tanstack/react-query").UseMutationResult<import("axios").AxiosResponse<import("./user.types").GetUsersResponse, any>, Error, import("./user.types").BanOrReactivateUserRequest, unknown>;
export declare function useDeleteUserSelf(): import("@tanstack/react-query").UseMutationResult<import("axios").AxiosResponse<import("./user.types").GetUsersResponse, any>, Error, void, unknown>;
