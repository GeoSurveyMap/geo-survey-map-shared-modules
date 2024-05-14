export declare const axiosClient: import("axios").AxiosInstance;
export declare const updateApiClient: {
    setAuthenticationHeader: (token: string) => void;
    removeAuthenticationHeader: () => void;
    setBaseURL: (url: string) => void;
};
