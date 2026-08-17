import { useMemo, useState } from 'react';
import LocationContext from './LocationContext';

const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: '',
    status: null,
  });

  const value = useMemo(
    () => ({
      locations,
      setLocations,

      selectedLocation,
      setSelectedLocation,

      loading,
      setLoading,

      filters,
      setFilters,
    }),
    [locations, selectedLocation, loading, filters],
  );

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
