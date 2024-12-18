import { axiosClient } from '../libs/axiosClient';
import { 
	PostRegisterUserRequest, 
	PostRegisterUserResponse, 
	GetUsersWithinCountryRequest, 
	GetUsersWithinCountryResponse, 
	Permissions
} from './user.types';

const URLS = {
  USER: `/api/v1/user`,
  usersWithinCountry: (permissions: Permissions[]) => {
    const params = new URLSearchParams({ radius: permissions.toString() });
    return `/api/v1/user/filter?${params.toString()}`;
  },
};

export const postRegisterUser = (data: PostRegisterUserRequest) => {
  return axiosClient.post<PostRegisterUserResponse>(URLS.USER, data);
};

export const getUsersWithinCountry = ({permissions}: GetUsersWithinCountryRequest) => {
	return axiosClient.get<GetUsersWithinCountryResponse>(URLS.usersWithinCountry(permissions));
  };