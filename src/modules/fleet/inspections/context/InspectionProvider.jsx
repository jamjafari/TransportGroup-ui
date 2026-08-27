// context/InspectionProvider.jsx
import { useMemo, useState } from 'react';
import InspectionContext from './InspectionContext';

const InspectionProvider = ({ children }) => {
  const [inspections, setInspections] = useState([]);
  const [selectedInspection, setSelectedInspection] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});

  const value = useMemo(
    () => ({
      inspections,
      setInspections,
      selectedInspection,
      setSelectedInspection,
      loading,
      setLoading,
      filters,
      setFilters,
    }),
    [inspections, selectedInspection, loading, filters],
  );

  return (
    <InspectionContext.Provider value={value}>
      {children}
    </InspectionContext.Provider>
  );
};

export default InspectionProvider;
