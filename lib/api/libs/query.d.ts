import { QueryClient } from '@tanstack/react-query';
import { Category } from 'types';
export declare const queryClient: QueryClient;
export declare const clearQueryCache: () => void;
export declare const queryKeys: {
    survey: {
        all: readonly ["allSurveys"];
        byLocation: (x: number, y: number) => readonly ["survey", number, number];
        withinRadius: (x: number, y: number, radius: number) => readonly ["surveys", number, number, number];
        withinBoundingBox: (minX: number, maxX: number, minY: number, maxY: number, categories?: Category[]) => readonly ["surveys", number, number, number, number, Category[] | undefined];
    };
};
