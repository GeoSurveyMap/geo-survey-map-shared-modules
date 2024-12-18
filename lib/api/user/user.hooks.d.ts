export declare const useRegisterUser: () => import("@tanstack/react-query").UseMutationResult<import("axios").AxiosResponse<number, any>, Error, import("./user.types").PostRegisterUserRequest, unknown>;
export declare const useGetUsersWithinCountry: (permissions: any) => import("@tanstack/react-query").UseQueryResult<import("./user.types").GetUsersWithinCountryResponse, Error>;
