import axiosClient from '@/core/http/axiosClient';
import ResponseModel from '../models/ResponseModel';

// ✅ خطای اعتبارسنجی سرور (ValidationProblemDetails) فیلد message ندارد؛ پیام‌ها در errors هستند:
//   { errors: { PlateNumber: ['...'], ... } }
// ⇒ errors: فهرست پیام‌ها   |   extra.fieldErrors: { plateNumber: '...' } (هم‌نام با فیلدهای فرم)
const parseError = (error) => {
  const data = error.response?.data;

  if (data?.errors && typeof data.errors === 'object') {
    const fieldErrors = {};

    Object.entries(data.errors).forEach(([field, messages]) => {
      const name = field.replace(/^\$\./, '');
      const key = name.charAt(0).toLowerCase() + name.slice(1);

      fieldErrors[key] = [].concat(messages)[0];
    });

    return { errors: Object.values(fieldErrors), fieldErrors };
  }

  // بدون پاسخ سرور (قطع شبکه و ...) متن خامِ انگلیسی axios نشان داده نمی‌شود؛ پیام پیش‌فرض صدا‌زننده جایش را می‌گیرد
  if (!error.response) return { errors: [], fieldErrors: {} };

  return { errors: [data?.message || error.message], fieldErrors: {} };
};

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

    const { errors, fieldErrors } = parseError(error);

    return new ResponseModel({
      success: false,
      errors,
      data: null,
      extra: { fieldErrors },
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
