import { TokenManager } from '@/core/auth';

const requestInterceptor = (config) => {
  const token = TokenManager.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const requestErrorInterceptor = (error) => {
  return Promise.reject(error);
};

export { requestInterceptor, requestErrorInterceptor };
