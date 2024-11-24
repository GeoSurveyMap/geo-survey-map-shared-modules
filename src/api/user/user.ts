import { axiosClient } from 'api/libs/axiosClient';
import { PostRegisterUserResponse, User } from './user.types';

const URLS = {
  USER: `/api/v1/user`,
};

export const postRegisterUser = (data: User) => {
  return axiosClient.post<PostRegisterUserResponse>(URLS.USER, data);
};
