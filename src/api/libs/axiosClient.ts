/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

import type { AxiosRequestConfig } from 'axios';

export const axiosClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
} as AxiosRequestConfig);

const setAuthenticationHeader = (token: string) => {
  axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthenticationHeader = () => {
  delete axiosClient.defaults.headers.common.Authentication;
};

const setBaseURL = (url: string) => {
  axiosClient.defaults.baseURL = url;
};

export const updateApiClient = {
  setAuthenticationHeader,
  removeAuthenticationHeader,
  setBaseURL,
};
