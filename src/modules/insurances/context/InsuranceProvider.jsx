import { useMemo, useState } from 'react';
import InsuranceContext from './InsuranceContext';

const InsuranceProvider = ({ children }) => {
  const [insurances, setInsurances] = useState([]);
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: '',
    status: null,
  });

  const value = useMemo(
    () => ({
      insurances,
      setInsurances,

      selectedInsurance,
      setSelectedInsurance,

      loading,
      setLoading,

      filters,
      setFilters,
    }),
    [insurances, selectedInsurance, loading, filters],
  );

  return (
    <InsuranceContext.Provider value={value}>
      {children}
    </InsuranceContext.Provider>
  );
};

export default InsuranceProvider;
