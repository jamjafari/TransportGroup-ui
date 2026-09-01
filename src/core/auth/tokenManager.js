const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

const TokenManager = {
  getToken() {
    return (
      localStorage.getItem(ACCESS_TOKEN) || sessionStorage.getItem(ACCESS_TOKEN)
    );
  },

  setToken(token, rememberMe = false) {
    // ابتدا از هر دو storage پاک می‌کنیم
    localStorage.removeItem(ACCESS_TOKEN);
    sessionStorage.removeItem(ACCESS_TOKEN);

    const storage = rememberMe ? localStorage : sessionStorage;

    storage.setItem(ACCESS_TOKEN, token);
  },

  removeToken() {
    localStorage.removeItem(ACCESS_TOKEN);
    sessionStorage.removeItem(ACCESS_TOKEN);
  },

  getRefreshToken() {
    return (
      localStorage.getItem(REFRESH_TOKEN) ||
      sessionStorage.getItem(REFRESH_TOKEN)
    );
  },

  setRefreshToken(token, rememberMe = false) {
    localStorage.removeItem(REFRESH_TOKEN);
    sessionStorage.removeItem(REFRESH_TOKEN);

    const storage = rememberMe ? localStorage : sessionStorage;

    storage.setItem(REFRESH_TOKEN, token);
  },

  removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN);
    sessionStorage.removeItem(REFRESH_TOKEN);
  },

  clear() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);

    sessionStorage.removeItem(ACCESS_TOKEN);
    sessionStorage.removeItem(REFRESH_TOKEN);
  },
};

export default TokenManager;
