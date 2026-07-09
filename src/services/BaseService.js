import apiClient from './apiClient';

export default class BaseService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(endpoint = '', params = {}) {
    return apiClient.get(
      `${this.baseUrl}${endpoint}`,

      params,
    );
  }

  post(endpoint = '', body = {}) {
    return apiClient.post(
      `${this.baseUrl}${endpoint}`,

      body,
    );
  }

  put(endpoint = '', body = {}) {
    return apiClient.put(
      `${this.baseUrl}${endpoint}`,

      body,
    );
  }

  delete(endpoint = '') {
    return apiClient.delete(`${this.baseUrl}${endpoint}`);
  }
}
