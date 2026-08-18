// context/AccidentProvider.jsx
import { useMemo, useState } from 'react';
import AccidentContext from './AccidentContext';

const AccidentProvider = ({ children }) => {
  const [accidents, setAccidents] = useState([]);
  const [selectedAccident, setSelectedAccident] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});

  const value = useMemo(
    () => ({
      accidents,
      setAccidents,
      selectedAccident,
      setSelectedAccident,
      loading,
      setLoading,
      filters,
      setFilters,
    }),
    [accidents, selectedAccident, loading, filters],
  );

  return (
    <AccidentContext.Provider value={value}>
      {children}
    </AccidentContext.Provider>
  );
};

export default AccidentProvider;
