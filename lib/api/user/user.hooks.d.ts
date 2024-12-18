import { Permissions } from './user.types';
export declare const useRegisterUser: () => import("@tanstack/react-query").UseMutationResult<import("axios").AxiosResponse<number, any>, Error, import("./user.types").PostRegisterUserRequest, unknown>;
export declare function useGetUsersWithinCountry(permissions: Permissions): import("@tanstack/react-query").UseQueryResult<(Omit<import("./user.types").User, "id"> & {
    permissions?: Permissions[] | undefined;
}[]) | undefined, Error>;
