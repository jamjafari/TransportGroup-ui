import { useMemo, useState } from 'react';
import FuelCardContext from './FuelCardContext';

const FuelCardProvider = ({ children }) => {
  const [fuelCards, setFuelCards] = useState([]);
  const [selectedFuelCard, setSelectedFuelCard] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: '',
    status: null,
  });

  const value = useMemo(
    () => ({
      fuelCards,
      setFuelCards,

      selectedFuelCard,
      setSelectedFuelCard,

      loading,
      setLoading,

      filters,
      setFilters,
    }),
    [fuelCards, selectedFuelCard, loading, filters],
  );

  return (
    <FuelCardContext.Provider value={value}>
      {children}
    </FuelCardContext.Provider>
  );
};

export default FuelCardProvider;
