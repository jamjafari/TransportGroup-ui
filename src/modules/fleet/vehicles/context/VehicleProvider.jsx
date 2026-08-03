import { useMemo, useState } from 'react';
import VehicleContext from './VehicleContext';

const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: '',
    status: null,
  });

  const value = useMemo(
    () => ({
      vehicles,
      setVehicles,

      selectedVehicle,
      setSelectedVehicle,

      loading,
      setLoading,

      filters,
      setFilters,
    }),
    [vehicles, selectedVehicle, loading, filters],
  );

  return (
    <VehicleContext.Provider value={value}>{children}</VehicleContext.Provider>
  );
};

export default VehicleProvider;
