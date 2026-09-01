import { useMemo } from 'react';

import { useAuth } from '@/context';
import { getTenantInfo, isSubscriptionExpired } from '@/core/auth';

const useTenant = () => {
  const { user } = useAuth();

  const tenant = useMemo(() => getTenantInfo(user), [user]);
  const expired = useMemo(() => isSubscriptionExpired(user), [user]);

  return {
    tenant,
    isSubscriptionExpired: expired,
  };
};

export default useTenant;
