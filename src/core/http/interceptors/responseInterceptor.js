import axiosClient from '../axiosClient';

import { tokenManager } from '@/core/auth';

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

  const status = error.response?.status;

  const url = originalRequest?.url || '';

  // --------------------------------------------------
  // Login و Refresh نباید وارد فرآیند refresh شوند
  // --------------------------------------------------

  const isLoginRequest = url.includes('/auth/login');

  const isRefreshRequest = url.includes('/auth/refresh-token');

  if (
    status !== 401 ||
    originalRequest?._retry ||
    isLoginRequest ||
    isRefreshRequest
  ) {
    return Promise.reject(error);
  }

  originalRequest._retry = true;

  // --------------------------------------------------
  // اگر درخواست دیگری در حال refresh است
  // --------------------------------------------------

  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      failedQueue.push({
        resolve,
        reject,
      });
    }).then((token) => {
      originalRequest.headers = {
        ...originalRequest.headers,
        Authorization: `Bearer ${token}`,
      };

      return axiosClient(originalRequest);
    });
  }

  isRefreshing = true;

  try {
    const refreshToken = tokenManager.getRefreshToken();

    if (!refreshToken) {
      throw new Error('Refresh token وجود ندارد.');
    }

    const response = await axiosClient.post('/auth/refresh-token', {
      refreshToken,
    });

    const newToken = response.data.accessToken;

    tokenManager.setToken(newToken);

    originalRequest.headers = {
      ...originalRequest.headers,
      Authorization: `Bearer ${newToken}`,
    };

    processQueue(null, newToken);

    return axiosClient(originalRequest);
  } catch (err) {
    processQueue(err);

    tokenManager.clear();

    window.location.href = '/login';

    return Promise.reject(err);
  } finally {
    isRefreshing = false;
  }
};

export { responseInterceptor, responseErrorInterceptor };
