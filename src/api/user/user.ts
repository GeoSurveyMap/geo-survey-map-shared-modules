import { axiosClient } from '../libs/axiosClient';
import { 
	PostRegisterUserRequest, 
	PostRegisterUserResponse, 
	GetUsersResponse, 
	Permissions
} from './user.types';

const URLS = {
  USER: `/api/v1/user`,
  ALL: `/api/v1/user/filter`,
  usersWithinCountry: (permissions: Permissions) => {
    const params = new URLSearchParams({ permissions: permissions.toString() });
    return `/api/v1/user/filter?${params.toString()}`;
  },
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