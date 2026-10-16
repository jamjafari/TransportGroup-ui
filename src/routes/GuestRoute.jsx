import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/hooks';
import { getPostLoginRedirect } from '@/utils/authRedirect';

const GuestRoute = () => {
  const { isAuthenticated, loading, user } = useAuth();

  if (loading) {
    return null;
  }

  // ✅ مقصد بر اساس نقش — راننده به /driver/missions می‌رود، نه /dashboard
  if (isAuthenticated) {
    return <Navigate to={getPostLoginRedirect(user)} replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
