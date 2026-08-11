import { useMemo, useState } from 'react';
import TireContext from './TireContext';

const TireProvider = ({ children }) => {
  const [tires, setTires] = useState([]);
  const [selectedTire, setSelectedTire] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: '',
    status: null,
  });

  const value = useMemo(
    () => ({
      tires,
      setTires,

      selectedTire,
      setSelectedTire,

      loading,
      setLoading,

      filters,
      setFilters,
    }),
    [tires, selectedTire, loading, filters],
  );

  return <TireContext.Provider value={value}>{children}</TireContext.Provider>;
};

export default TireProvider;
