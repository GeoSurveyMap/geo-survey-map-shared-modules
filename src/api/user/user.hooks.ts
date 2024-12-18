import { useMutation, useQuery } from '@tanstack/react-query';
import { getAllUsers, getUsersWithinCountry, postRegisterUser } from './user';
import { queryClient, queryKeys } from '../../api/libs/query';
import { Permissions } from './user.types';

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: postRegisterUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.survey.user] });
    },
  });
};

// Custom hook for fetching all users
export function useGetAllUsers () {
	return useQuery({
	  queryKey: queryKeys.users.all,
	  queryFn: () => getAllUsers(),
	  select: ({ data }) => data.data,
	});
  }

// Custom hook for fetching users within a given country permissions
export function useGetUsersWithinCountry (permissions: Permissions) {
	return useQuery({
	  queryKey: queryKeys.users.withinCountry(permissions),
	  queryFn: () => getUsersWithinCountry(permissions),
	  select: ({ data }) => data.data,
	});
  }
