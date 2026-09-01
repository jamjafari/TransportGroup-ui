import axiosClient from '@/core/http/axiosClient';

const TenantRepository = {
  async getMe() {
    const response = await axiosClient.get('/tenant/me');
    return response.data;
  },
};

export default TenantRepository;
