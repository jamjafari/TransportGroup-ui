import { useMemo, useState } from 'react';
import ServiceTypeContext from './ServiceTypeContext';

const ServiceTypeProvider = ({ children }) => {
  const [serviceTypes, setServiceTypes] = useState([]);
  const [selectedServiceType, setSelectedServiceType] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: '',
    status: null,
  });

  const value = useMemo(
    () => ({
      serviceTypes,
      setServiceTypes,

      selectedServiceType,
      setSelectedServiceType,

      loading,
      setLoading,

      filters,
      setFilters,
    }),
    [serviceTypes, selectedServiceType, loading, filters],
  );

  return (
    <ServiceTypeContext.Provider value={value}>
      {children}
    </ServiceTypeContext.Provider>
  );
};

export default ServiceTypeProvider;
