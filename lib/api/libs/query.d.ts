/// <reference types="react" />
import { QueryClient } from '@tanstack/react-query';
import { Permissions } from 'api/user/user.types';
import { Category } from 'types';
export declare const queryClient: QueryClient;
export declare const TanstackQueryProvider: ({ client, children, }: import("@tanstack/react-query").QueryClientProviderProps) => JSX.Element;
export declare const clearQueryCache: () => void;
export declare const queryKeys: {
    survey: {
        all: readonly ["allSurveys"];
        user: readonly ["userSurveys"];
        byLocation: (x: number, y: number) => readonly ["survey", number, number];
        withinRadius: (x: number, y: number, radius: number) => readonly ["surveys", number, number, number];
        withinBoundingBox: (minX: number, maxX: number, minY: number, maxY: number, categories?: Category[]) => readonly ["surveys", number, number, number, number, Category[] | undefined];
    };
    users: {
        all: readonly ["allUsers"];
        withinCountry: (permissions: Permissions) => readonly ["users", Permissions];
    };
};
