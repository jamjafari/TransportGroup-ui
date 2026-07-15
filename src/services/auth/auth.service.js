import { BaseApiService, AUTH_ENDPOINTS } from '@/core/http';

class AuthService extends BaseApiService {
  constructor() {
    super('');
  }

  login(data) {
    return this.post(AUTH_ENDPOINTS.LOGIN, data);
  }

  logout() {
    return this.post(AUTH_ENDPOINTS.LOGOUT);
  }

  profile() {
    return this.get(AUTH_ENDPOINTS.PROFILE);
  }

  refreshToken(data) {
    return this.post(AUTH_ENDPOINTS.REFRESH_TOKEN, data);
  }
}

export default new AuthService();
