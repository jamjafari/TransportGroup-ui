import { useMemo, useState } from 'react';
import DriverContext from './DriverContext';

const DriverProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: '',
    status: null,
  });

  const value = useMemo(
    () => ({
      drivers,
      setDrivers,

      selectedDriver,
      setSelectedDriver,

      loading,
      setLoading,

      filters,
      setFilters,
    }),
    [drivers, selectedDriver, loading, filters],
  );

  return (
    <DriverContext.Provider value={value}>{children}</DriverContext.Provider>
  );
};

export default DriverProvider;
