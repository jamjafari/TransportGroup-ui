import { useState, useEffect, useCallback, useMemo } from 'react';

import AuthContext from './AuthContext';

import { AuthRepository } from '@/repositories';

import { tokenManager, decodeToken, isTokenExpired } from '@/core/auth';
import {
  hasPermission,
  hasAnyPermission,
  hasAllPermissions,
} from '@/core/auth';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  const [loading, setLoading] = useState(true);

  const login = useCallback(async (credentials) => {
    const result = await AuthRepository.login(credentials);

    tokenManager.setToken(result.accessToken);

    tokenManager.setRefreshToken(result.refreshToken);

    const decoded = decodeToken(result.accessToken);

    setToken(result.accessToken);

    setUser(decoded);

    return result;
  }, []);

  const logout = useCallback(() => {
    tokenManager.clear();

    setToken(null);

    setUser(null);
  }, []);

  const restoreUser = useCallback(() => {
    const savedToken = tokenManager.getToken();

    if (!savedToken) {
      setLoading(false);
      return;
    }

    if (isTokenExpired(savedToken)) {
      tokenManager.clear();

      setLoading(false);

      return;
    }

    const decoded = decodeToken(savedToken);

    setToken(savedToken);

    setUser(decoded);

    setLoading(false);
  }, []);

  useEffect(() => {
    restoreUser();
  }, [restoreUser]);

  const value = useMemo(
    () => ({
      user,

      token,

      loading,
      can: (permission) => hasPermission(user, permission),
      canAny: (permissions) => hasAnyPermission(user, permissions),
      canAll: (permissions) => hasAllPermissions(user, permissions),

      login,

      logout,

      restoreUser,

      isAuthenticated: !!token,
    }),
    [user, token, loading, login, logout, restoreUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
