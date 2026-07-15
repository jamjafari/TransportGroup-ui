import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/hooks';

const GuestRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
