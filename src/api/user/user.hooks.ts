import { useMutation, useQuery } from '@tanstack/react-query';
import { getUsersWithinCountry, postRegisterUser } from './user';
import { queryClient, queryKeys } from '../../api/libs/query';

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: postRegisterUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.survey.user] });
    },
  });
};

// Custom hook for fetching users within a given country permissions
export const useGetUsersWithinCountry = (permissions) => {
	return useQuery({
	  queryKey: queryKeys.users.withinCountry(permissions),
	  queryFn: () => getUsersWithinCountry(permissions),
	  select: ({ data }) => data,
	});
  }
