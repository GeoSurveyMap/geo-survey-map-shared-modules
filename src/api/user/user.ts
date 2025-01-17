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
  DELETE_SELF: `/api/v1/user/self`,
  GET_SELF: `/api/v1/user/self`,
  usersWithinCountry: (permissions: Permissions) => {
    const params = new URLSearchParams({ permissions: permissions.toString() });
    return `/api/v1/user/filter?${params.toString()}`;
  },
  updatePermissions: (kindeId: string, permissions: Permissions[]) => {
    const params = new URLSearchParams({ permissions: permissions.toString() });
    return `/api/v1/user/update/${kindeId}?${params.toString()}`;
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

export const getSelfUserData = () => {
	return axiosClient.get<GetUsersResponse>(URLS.GET_SELF);
};

export const getUsersWithinCountry = (permissions: Permissions) => {
	return axiosClient.get<GetUsersResponse>(URLS.usersWithinCountry(permissions));
};

export function setUserPermissions(data: UpdateUserPermissionsRequest) {
	const { kindeId, permissions } = data;
	return axiosClient.put<GetUsersResponse>(URLS.updatePermissions(kindeId, permissions));
}

export function deleteUserSelf() {
	return axiosClient.delete<GetUsersResponse>(URLS.DELETE_SELF);
}

export function banOrReactivateUser(data: BanOrReactivateUserRequest) {
	const { kindeId, status } = data;
	return axiosClient.delete<GetUsersResponse>(URLS.banOrReactivate(kindeId, status));
}
