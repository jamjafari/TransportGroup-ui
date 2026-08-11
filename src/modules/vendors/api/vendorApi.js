import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| Vendor API Endpoints
|--------------------------------------------------------------------------
|
| GET    /Vendors
| GET    /Vendors/{id}
| POST   /Vendors
| PUT    /Vendors/{id}
| DELETE /Vendors/{id}
|
*/

const BASE_URL = '/vendor';

export const getVendors = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, {
    params,
  });

  return response;
};

export const getVendorById = async (id) => {
  const response = await apiClient.get(`${BASE_URL}/${id}`);

  return response;
};

export const createVendor = async (vendor) => {
  console.log('api vendor:', vendor);
  const response = await apiClient.post(BASE_URL, vendor);

  return response;
};

export const updateVendor = async (vendor) => {
  console.log('API UPDATE vendor:', vendor);

  const response = await apiClient.put(BASE_URL, vendor);

  return response;
};

export const deleteVendor = async (id) => {
  const response = await apiClient.delete(`${BASE_URL}/${id}`);

  return response;
};
