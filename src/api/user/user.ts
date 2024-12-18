import { axiosClient } from '../libs/axiosClient';
import { 
	PostRegisterUserRequest, 
	PostRegisterUserResponse, 
	GetUsersResponse, 
	Permissions,
	UpdateUserPermissionsRequest,
	UserStatus,
	BanOrReactivateUserRequest,
} from './user.types';

const URLS = {
  USER: `/api/v1/user`,
  ALL: `/api/v1/user/filter`,
  usersWithinCountry: (permissions: Permissions) => {
    const params = new URLSearchParams({ permissions: permissions.toString() });
    return `/api/v1/user/filter?${params.toString()}`;
  },
  updatePermissions: (kindeId: string) => {
    return `/api/v1/user/update/${kindeId}`;
  },
  delete: (kindeId: string) => {
    const params = new URLSearchParams({ kindeId: kindeId.toString() });
    return `/users/${params.toString()}/delete`;
  },
  banOrReactivate: (kindeId: string, userStatus: UserStatus) => {
    return `/users/${kindeId}/status/${userStatus}`;
  }
};

export const postRegisterUser = (data: PostRegisterUserRequest) => {
  return axiosClient.post<PostRegisterUserResponse>(URLS.USER, data);
};

export const getAllUsers = () => {
	return axiosClient.get<GetUsersResponse>(URLS.ALL);
  };

export const getUsersWithinCountry = (permissions: Permissions) => {
	return axiosClient.get<GetUsersResponse>(URLS.usersWithinCountry(permissions));
  };

export function setUserPermissions(data: UpdateUserPermissionsRequest) {
	const { kindeId } = data;
	return axiosClient.put<GetUsersResponse>(URLS.updatePermissions(kindeId), data);
}

export function deleteUser(data: UpdateUserPermissionsRequest) {
	const { kindeId } = data;
	return axiosClient.delete<GetUsersResponse>(URLS.delete(kindeId));
}

export function banOrReactivateUser(data: BanOrReactivateUserRequest) {
	const { kindeId, status } = data;
	return axiosClient.delete<GetUsersResponse>(URLS.banOrReactivate(kindeId, status));
}


