import BaseRepository from './BaseRepository';
import authService from '@/services/auth/auth.service';

class AuthRepository extends BaseRepository {
  constructor() {
    super(authService);
  }

  async login(credentials) {
    const response = await this.service.login(credentials);
    return response.data;
  }

  async logout() {
    return await this.service.logout();
  }

  async refreshToken(refreshToken) {
    const response = await this.service.refreshToken(refreshToken);
    return response.data;
  }

  async forceChangePassword(payload) {
    // ✅ اضافه شد
    const response = await this.service.forceChangePassword(payload);
    return response.data;
  }
}

export default new AuthRepository();
