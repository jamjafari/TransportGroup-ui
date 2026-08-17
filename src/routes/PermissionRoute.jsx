import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/hooks';

const PermissionRoute = ({ permission, anyOf }) => {
  const { can, canAny, loading } = useAuth();

  if (loading) {
    return null;
  }

  const allowed = anyOf ? canAny(anyOf) : can(permission);

  if (!allowed) {
    return <Navigate to="/403" replace />;
  }

  return <Outlet />;
};

export default PermissionRoute;
