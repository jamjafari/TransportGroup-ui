import { useState, useEffect, useCallback, useMemo } from 'react';

import TenantContext from './TenantContext';
import TenantRepository from '@/repositories/TenantRepository';
import { useAuth } from '@/context';

const TenantProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [tenant, setTenant] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTenant = useCallback(async () => {
    if (!isAuthenticated) {
      setTenant(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const data = await TenantRepository.getMe();
      setTenant(data);
    } catch {
      setTenant(null);
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    fetchTenant();
  }, [fetchTenant]);

  const isSubscriptionExpired = useMemo(() => {
    if (!tenant) {
      return false;
    }

    if (!tenant.isActive) {
      return true;
    }

    if (!tenant.subscriptionExpiresAt) {
      return false;
    }

    return new Date(tenant.subscriptionExpiresAt) < new Date();
  }, [tenant]);

  const value = useMemo(
    () => ({
      tenant,
      loading,
      isSubscriptionExpired,
      refetch: fetchTenant,
    }),
    [tenant, loading, isSubscriptionExpired, fetchTenant],
  );

  return (
    <TenantContext.Provider value={value}>{children}</TenantContext.Provider>
  );
};

export default TenantProvider;
