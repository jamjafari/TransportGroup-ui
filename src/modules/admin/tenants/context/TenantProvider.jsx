import { useMemo, useState } from 'react';
import TenantContext from './TenantContext';

const TenantProvider = ({ children }) => {
  const [tenants, setTenants] = useState([]);
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ search: '' });

  const value = useMemo(
    () => ({
      tenants,
      setTenants,
      selectedTenant,
      setSelectedTenant,
      loading,
      setLoading,
      filters,
      setFilters,
    }),
    [tenants, selectedTenant, loading, filters],
  );

  return (
    <TenantContext.Provider value={value}>{children}</TenantContext.Provider>
  );
};

export default TenantProvider;
