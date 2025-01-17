import { useMutation, useQuery } from '@tanstack/react-query';
import { banOrReactivateUser, deleteUserSelf, getAllUsers, getSelfUserData, getUsersWithinCountry, postRegisterUser, setUserPermissions } from './user';
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

// Custom hook for fetching self user data
export function useGetSelfUserData () {
	return useQuery({
	  queryKey: queryKeys.users.self,
	  queryFn: () => getSelfUserData(),
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

// Custom hook for setting user permissions
export function useSetUserPermissions() {
	return useMutation({
	  mutationFn: setUserPermissions,
	  onSuccess: () => {
		queryClient.invalidateQueries({ queryKey: [queryKeys.users.all, queryKeys.users.withinCountry] });
	  },
	});
}

// Custom hook for banning or reactivating a user
export function useBanOrReactivateUser() {
	return useMutation({
	  mutationFn: banOrReactivateUser,
	  onSuccess: () => {
		queryClient.invalidateQueries({ queryKey: [queryKeys.users.all, queryKeys.users.withinCountry] });
	  },
	});
}

// Custom hook for self deleting account
export function useDeleteUserSelf() {
	return useMutation({
	  mutationFn: deleteUserSelf,
	  onSuccess: () => {
		queryClient.invalidateQueries({ queryKey: [queryKeys.users.all, queryKeys.users.withinCountry] });
	  },
	});
}
