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
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
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
