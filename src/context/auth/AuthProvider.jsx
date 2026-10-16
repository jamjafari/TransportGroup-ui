import { useState, useEffect, useCallback, useMemo } from 'react';

import AuthContext from './AuthContext';
import { AuthRepository } from '@/repositories';
import {
  tokenManager,
  decodeToken,
  hasPermission,
  hasAnyPermission,
  hasAllPermissions,
} from '@/core/auth';
import { refreshSession } from '@/core/http';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Access Token فقط در حافظه؛ Refresh Token را سرور در کوکی HttpOnly گذاشته است
  const applySession = useCallback((result) => {
    tokenManager.setToken(result.accessToken);

    const decoded = decodeToken(result.accessToken);
    setToken(result.accessToken);
    setUser(decoded);

    return decoded; // ✅ اضافه شد
  }, []);

  const login = useCallback(
    async (credentials) => {
      const result = await AuthRepository.login(credentials);

      if (result.mustChangePassword) {
        return result;
      }

      const decodedUser = applySession(result);
      return { ...result, user: decodedUser }; // ✅ اضافه شد
    },
    [applySession],
  );

  const forceChangePassword = useCallback(
    async ({ userName, currentPassword, newPassword }) => {
      const result = await AuthRepository.forceChangePassword({
        userName,
        currentPassword,
        newPassword,
      });

      const decodedUser = applySession(result);
      return { ...result, user: decodedUser }; // ✅ اضافه شد
    },
    [applySession],
  );

  const logout = useCallback(async () => {
    // کوکی HttpOnly را فقط سرور می‌تواند پاک کند؛ Refresh Token هم همان‌جا باطل می‌شود
    try {
      await AuthRepository.logout();
    } catch {
      // حتی اگر سرور در دسترس نبود، نشست سمت کاربر بسته می‌شود
    }

    tokenManager.clear();
    setToken(null);
    setUser(null);
  }, []);

  // ✅ بعد از بارگذاری صفحه Access Token در حافظه نیست؛ با کوکی Refresh یک توکن تازه می‌گیریم
  const restoreUser = useCallback(async () => {
    try {
      const result = await refreshSession();
      applySession(result);
    } catch {
      // کوکی معتبری وجود ندارد — کاربر وارد نشده است
      tokenManager.clear();
    } finally {
      setLoading(false);
    }
  }, [applySession]);

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
      forceChangePassword,
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
