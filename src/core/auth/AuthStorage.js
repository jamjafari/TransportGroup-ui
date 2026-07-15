const AUTH_USER = 'auth_user';

const AuthStorage = {
  save(user) {
    localStorage.setItem(AUTH_USER, JSON.stringify(user));
  },

  load() {
    const value = localStorage.getItem(AUTH_USER);

    if (!value) {
      return null;
    }

    return JSON.parse(value);
  },

  clear() {
    localStorage.removeItem(AUTH_USER);
  },
};

export default AuthStorage;
