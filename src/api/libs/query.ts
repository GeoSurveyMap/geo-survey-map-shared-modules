import { QueryClient, focusManager, onlineManager } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const clearQueryCache = () => {
  queryClient.clear();
};

export const queryKeys = {
  survey: {
    all: ['allSurveys'] as const,
    byLocation: (x: number, y: number) => ['survey', x, y] as const,
    withinRadius: (x: number, y: number, radius: number) => ['surveys', x, y, radius] as const,
  },
};
