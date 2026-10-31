import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| Vehicle Request API  (/vehicle-requests)
|--------------------------------------------------------------------------
| همه‌ی کاربران:  POST /           GET /mine        POST /{id}/cancel
|                 GET /availability?from&to         GET /locations
| مدیر نقلیه:     GET /?status     GET /{id}/resources
|                 POST /{id}/approve                POST /{id}/reject
*/

const BASE_URL = '/vehicle-requests';

export const createRequest = (data) => apiClient.post(BASE_URL, data);

export const getMyRequests = () => apiClient.get(`${BASE_URL}/mine`);

export const cancelRequest = (id) => apiClient.post(`${BASE_URL}/${id}/cancel`);

export const getAvailability = (from, to) =>
  apiClient.get(`${BASE_URL}/availability`, {
    params: { from, ...(to ? { to } : {}) },
  });

export const getLocations = () => apiClient.get(`${BASE_URL}/locations`);

// شمارنده‌ی دکمه: { pendingToReview, unseenResponses, total }
export const getBadge = () => apiClient.get(`${BASE_URL}/badge`);

export const markResponsesSeen = () => apiClient.post(`${BASE_URL}/mine/seen`);

export const getAllRequests = (status) =>
  apiClient.get(BASE_URL, { params: status ? { status } : {} });

export const getResources = (id) => apiClient.get(`${BASE_URL}/${id}/resources`);

export const approveRequest = (id, data) =>
  apiClient.post(`${BASE_URL}/${id}/approve`, data);

export const rejectRequest = (id, data) =>
  apiClient.post(`${BASE_URL}/${id}/reject`, data);
