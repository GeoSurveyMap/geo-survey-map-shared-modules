import { QueryClient, focusManager, onlineManager, QueryClientProvider } from '@tanstack/react-query';
import { Permissions } from 'api/user/user.types';
import { Category } from 'types';

export const queryClient = new QueryClient();
export const TanstackQueryProvider = QueryClientProvider;

export const clearQueryCache = () => {
  queryClient.clear();
};

export const queryKeys = {
  survey: {
    all: ['allSurveys'] as const,
    user: ['userSurveys'] as const,
    byLocation: (x: number, y: number) => ['survey', x, y] as const,
    withinRadius: (x: number, y: number, radius: number) => ['surveys', x, y, radius] as const,
    withinBoundingBox: (
      minX: number,
      maxX: number,
      minY: number,
      maxY: number,
      categories?: Category[],
    ) => ['surveys', minX, maxX, minY, maxY, categories] as const,
  },
  users: {
	withinCountry: (permissions: Permissions[]) => ['users', permissions] as const,
  }
};
