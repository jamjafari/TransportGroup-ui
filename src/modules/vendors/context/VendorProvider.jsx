import { useMemo, useState } from 'react';
import VendorContext from './VendorContext';

const VendorProvider = ({ children }) => {
  const [vendors, setVendors] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: '',
    status: null,
  });

  const value = useMemo(
    () => ({
      vendors,
      setVendors,

      selectedVendor,
      setSelectedVendor,

      loading,
      setLoading,

      filters,
      setFilters,
    }),
    [vendors, selectedVendor, loading, filters],
  );

  return (
    <VendorContext.Provider value={value}>{children}</VendorContext.Provider>
  );
};

export default VendorProvider;
