import { axiosClient } from '../libs/axiosClient';
import { PostRegisterUserRequest, PostRegisterUserResponse } from './user.types';

const URLS = {
  USER: `/api/v1/user`,
};

export const postRegisterUser = (data: PostRegisterUserRequest) => {
  return axiosClient.post<PostRegisterUserResponse>(URLS.USER, data);
};
