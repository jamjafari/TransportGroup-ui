import { useState, useEffect, useCallback, useMemo } from 'react';

import AuthContext from './AuthContext';
import { AuthRepository } from '@/repositories';
import {
  tokenManager,
  decodeToken,
  isTokenExpired,
  hasPermission,
  hasAnyPermission,
  hasAllPermissions,
} from '@/core/auth';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ منطق مشترک ذخیره‌ی نشست بعد از دریافت توکن معتبر (چه از لاگین عادی، چه از تغییر اجباری رمز)
  const applySession = useCallback((result, rememberMe = false) => {
    tokenManager.setToken(result.accessToken, rememberMe);
    tokenManager.setRefreshToken(result.refreshToken, rememberMe);

    const decoded = decodeToken(result.accessToken);
    setToken(result.accessToken);
    setUser(decoded);
  }, []);

  const login = useCallback(
    async (credentials) => {
      const result = await AuthRepository.login(credentials);

      if (result.mustChangePassword) {
        // توکنی صادر نشده؛ نباید چیزی در storage ذخیره بشه
        return result;
      }

      applySession(result, credentials.rememberMe);
      return result;
    },
    [applySession],
  );

  // ✅ جدید — برای حالت تغییر اجباری رمز (بدون توکن قبلی)
  const forceChangePassword = useCallback(
    async ({ userName, currentPassword, newPassword }) => {
      const result = await AuthRepository.forceChangePassword({
        userName,
        currentPassword,
        newPassword,
      });

      applySession(result, false);
      return result;
    },
    [applySession],
  );

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
      login,
      logout,
      restoreUser,
      forceChangePassword, // ✅ اضافه شد
      isAuthenticated: !!token,
      can: (permission) => hasPermission(user, permission),
      canAny: (permissions) => hasAnyPermission(user, permissions),
      canAll: (permissions) => hasAllPermissions(user, permissions),
    }),
    [user, token, loading, login, logout, restoreUser, forceChangePassword],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
