import { tokenManager } from '@/core/auth';

const requestInterceptor = (config) => {
  const token = tokenManager.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const requestErrorInterceptor = (error) => {
  return Promise.reject(error);
};

export { requestInterceptor, requestErrorInterceptor };
