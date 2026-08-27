import { useMemo, useState } from 'react';
import ServiceContext from './ServiceContext';

const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: '',
    status: null,
  });

  const value = useMemo(
    () => ({
      services,
      setServices,

      selectedService,
      setSelectedService,

      loading,
      setLoading,

      filters,
      setFilters,
    }),
    [services, selectedService, loading, filters],
  );

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};

export default ServiceProvider;
