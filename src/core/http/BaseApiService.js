import { axiosClient } from './';

class BaseApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(url = '', config = {}) {
    return axiosClient.get(`${this.baseUrl}${url}`, config);
  }

  post(url = '', data = {}, config = {}) {
    return axiosClient.post(`${this.baseUrl}${url}`, data, config);
  }

  put(url = '', data = {}, config = {}) {
    return axiosClient.put(`${this.baseUrl}${url}`, data, config);
  }

  patch(url = '', data = {}, config = {}) {
    return axiosClient.patch(`${this.baseUrl}${url}`, data, config);
  }

  delete(url = '', config = {}) {
    return axiosClient.delete(`${this.baseUrl}${url}`, config);
  }
}

export default BaseApiService;
