import axiosClient from '../axiosClient';

import { TokenManager } from '@/core/auth';

let isRefreshing = false;

let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });

  failedQueue = [];
};

const responseInterceptor = (response) => response;

const responseErrorInterceptor = async (error) => {
  const originalRequest = error.config;

  if (error.response?.status !== 401 || originalRequest._retry) {
    return Promise.reject(error);
  }

  originalRequest._retry = true;

  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      failedQueue.push({
        resolve,
        reject,
      });
    }).then((token) => {
      originalRequest.headers.Authorization = `Bearer ${token}`;

      return axiosClient(originalRequest);
    });
  }

  isRefreshing = true;

  try {
    const refreshToken = TokenManager.getRefreshToken();

    const response = await axiosClient.post('/auth/refresh-token', {
      refreshToken,
    });

    const newToken = response.data.accessToken;
    TokenManager.setToken(newToken);

    originalRequest.headers.Authorization = `Bearer ${newToken}`;

    processQueue(null, newToken);

    return axiosClient(originalRequest);
  } catch (err) {
    processQueue(err);

    TokenManager.clear();

    window.location.href = '/login';

    return Promise.reject(err);
  } finally {
    isRefreshing = false;
  }
};

export { responseInterceptor, responseErrorInterceptor };
