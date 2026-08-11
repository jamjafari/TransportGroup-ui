import { useMemo, useState } from 'react';
import FuelRecordContext from './FuelRecordContext';

const FuelRecordProvider = ({ children }) => {
  const [fuelRecords, setFuelRecords] = useState([]);
  const [selectedFuelRecord, setSelectedFuelRecord] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: '',
    status: null,
  });

  const value = useMemo(
    () => ({
      fuelRecords,
      setFuelRecords,

      selectedFuelRecord,
      setSelectedFuelRecord,

      loading,
      setLoading,

      filters,
      setFilters,
    }),
    [fuelRecords, selectedFuelRecord, loading, filters],
  );

  return (
    <FuelRecordContext.Provider value={value}>
      {children}
    </FuelRecordContext.Provider>
  );
};

export default FuelRecordProvider;
