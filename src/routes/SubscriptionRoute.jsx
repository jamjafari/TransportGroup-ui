import { useAuth } from '@/hooks';
import { Navigate, Outlet } from 'react-router-dom';

import { useTenantContext } from '@/context/tenant';

const SubscriptionRoute = () => {
  const { loading: authLoading } = useAuth();
  const { loading: tenantLoading, isSubscriptionExpired } = useTenantContext();

  if (authLoading || tenantLoading) {
    return null;
  }

  if (isSubscriptionExpired) {
    return <Navigate to="/subscription-expired" replace />;
  }

  return <Outlet />;
};

export default SubscriptionRoute;
