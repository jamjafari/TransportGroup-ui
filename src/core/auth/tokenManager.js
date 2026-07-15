const ACCESS_TOKEN = 'access_token';

const REFRESH_TOKEN = 'refresh_token';

const TokenManager = {
  getToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  },

  setToken(token) {
    localStorage.setItem(ACCESS_TOKEN, token);
  },

  removeToken() {
    localStorage.removeItem(ACCESS_TOKEN);
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN);
  },

  setRefreshToken(token) {
    localStorage.setItem(REFRESH_TOKEN, token);
  },

  removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN);
  },

  clear() {
    localStorage.removeItem(ACCESS_TOKEN);

    localStorage.removeItem(REFRESH_TOKEN);
  },
};

export default TokenManager;
