import { tokenManager } from '@/core/auth';

// ✅ قبلاً کلید اشتباه 'accessToken' را از localStorage می‌خواند و همیشه null بود
export function getToken() {
  return tokenManager.getToken();
}

export function getPayload() {
  const token = getToken();

  if (!token) {
    return null;
  }

  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
}

export function hasPermission(permission) {
  const payload = getPayload();

  if (!payload) {
    return false;
  }

  const permissions = payload.Permission ?? [];

  return permissions.includes(permission);
}

export function hasRole(role) {
  const payload = getPayload();

  if (!payload) {
    return false;
  }

  return (
    payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] ===
    role
  );
}
