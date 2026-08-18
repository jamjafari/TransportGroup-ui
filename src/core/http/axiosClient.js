import axios from 'axios';

import {
  requestInterceptor,
  requestErrorInterceptor,
} from './interceptors/requestInterceptor';

import {
  responseInterceptor,
  responseErrorInterceptor,
} from './interceptors/responseInterceptor';

const axiosClient = axios.create({
  baseURL: 'https://localhost:7174/api',

  timeout: 30000,

  // withCredentials: true,
});

axiosClient.interceptors.request.use(
  requestInterceptor,
  requestErrorInterceptor,
);

axiosClient.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor,
);

export default axiosClient;
