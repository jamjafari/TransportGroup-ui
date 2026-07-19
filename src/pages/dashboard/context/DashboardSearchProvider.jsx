import { useState } from 'react';

import DashboardSearchContext from './DashboardSearchContext';

const initialFilters = {
  vehicleId: null,
  driverId: null,
  missionId: null,

  fuelType: null,
  expenseType: null,

  insuranceStatus: null,
  serviceStatus: null,

  dateRange: null,
};

const DashboardSearchProvider = ({ children }) => {
  const [filters, setFilters] = useState(initialFilters);

  // options

  const [vehicleOptions] = useState([]);
  const [driverOptions] = useState([]);
  const [missionOptions] = useState([]);

  const [fuelTypes] = useState([]);
  const [expenseTypes] = useState([]);

  const [insuranceStatusOptions] = useState([]);
  const [serviceStatusOptions] = useState([]);

  // handlers

  const updateFilters = (values) => {
    setFilters((prev) => ({
      ...prev,
      ...values,
    }));
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  const applyFilters = () => {};

  const hasActiveFilters = () => {
    return Object.values(filters).some((value) => value !== null);
  };

  return (
    <DashboardSearchContext.Provider
      value={{
        filters,

        vehicleOptions,
        driverOptions,
        missionOptions,

        fuelTypes,
        expenseTypes,

        insuranceStatusOptions,
        serviceStatusOptions,

        updateFilters,
        clearFilters,
        applyFilters,
        hasActiveFilters,
      }}
    >
      {children}
    </DashboardSearchContext.Provider>
  );
};

export default DashboardSearchProvider;
