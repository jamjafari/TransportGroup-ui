import axiosClient from '@/core/http/axiosClient';
import ResponseModel from '../models/ResponseModel';

const request = async (method, url, { params, data, config = {} } = {}) => {
  try {
    const response = await axiosClient.request({
      method,
      url,
      params,
      data,
      ...config,
    });

    // فرض: پاسخ بک‌اند مستقیم دیتا رو برمی‌گردونه (نه یه پوشش‌دهنده‌ی از قبل).
    // اگه backend شما یه فرمت استاندارد { success, data, message } برمی‌گردونه،
    // این خط باید بشه: return new ResponseModel({ ...response.data });
    return new ResponseModel({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error('API Error Detail:', error.response?.data);
    return new ResponseModel({
      success: false,
      errors: [error.response?.data?.message || error.message],
      data: null,
    });
  }
};

const apiClient = {
  get: (url, config = {}) => request('get', url, config),
  post: (url, data, config = {}) => request('post', url, { data, ...config }),
  put: (url, data, config = {}) => request('put', url, { data, ...config }),
  patch: (url, data, config = {}) => request('patch', url, { data, ...config }),
  delete: (url, config = {}) => request('delete', url, config),
};

export default apiClient;
