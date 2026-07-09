import { jwtDecode } from 'jwt-decode';

export function getCurrentUser() {
  const token = localStorage.getItem('accessToken');

  if (!token) return null;

  try {
    const payload = jwtDecode(token);

    return {
      id: payload[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
      ],

      userName:
        payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],

      role: payload[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ],

      exp: payload.exp,
    };
  } catch {
    return null;
  }
}
