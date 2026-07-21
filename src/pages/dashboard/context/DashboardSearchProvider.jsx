import { useEffect, useState } from 'react';

import DashboardSearchContext from './DashboardSearchContext';
import DashboardSearchService from '../../../services/dashboard/DashboardSearchService';

const initialFilters = {
  vehicleId: null,
  driverId: null,
  missionId: null,

  fuelTypeId: null,
  expenseTypeId: null,

  insuranceStatus: '',
  serviceStatus: '',

  dateRange: {
    from: null,
    to: null,
  },
};

const DashboardSearchProvider = ({ children }) => {
  const [filters, setFilters] = useState(initialFilters);
  const [searchKey, setSearchKey] = useState(0);
  // options

  const [vehicleOptions, setVehicleOptions] = useState([]);
  const [driverOptions, setDriverOptions] = useState([]);
  const [missionOptions, setMissionOptions] = useState([]);

  const [fuelTypes, setFuelTypes] = useState([]);
  const [expenseTypes, setExpenseTypes] = useState([]);

  const [insuranceStatusOptions, setInsuranceStatusOptions] = useState([]);
  const [serviceStatusOptions, setServiceStatusOptions] = useState([]);

  const loadSearchOptions = async () => {
    try {
      const [
        vehicles,
        drivers,
        missions,
        fuels,
        expenses,
        insuranceStatuses,
        serviceStatuses,
      ] = await Promise.all([
        DashboardSearchService.getVehicles(),
        DashboardSearchService.getDrivers(),
        DashboardSearchService.getMissions(),
        DashboardSearchService.getFuelTypes(),
        DashboardSearchService.getExpenseTypes(),
        DashboardSearchService.getInsuranceStatuses(),
        DashboardSearchService.getServiceStatuses(),
      ]);

      setVehicleOptions(vehicles);
      setDriverOptions(drivers);
      setMissionOptions(missions);

      setFuelTypes(fuels);
      setExpenseTypes(expenses);

      setInsuranceStatusOptions(insuranceStatuses);
      setServiceStatusOptions(serviceStatuses);
    } catch (error) {
      console.error('Dashboard Search Options Loading Error :', error);
    }
  };
  // useEffect(() => {
  //   console.log('provider vehicle options:', vehicleOptions);
  // }, [vehicleOptions]);
  useEffect(() => {
    loadSearchOptions();
  }, []);
  // handlers

  const updateFilters = (values) => {
    setFilters((prev) => ({
      ...prev,
      ...values,
    }));
  };

  const applyFilters = () => {
    setSearchKey((prev) => prev + 1);
  };

  const clearFilters = () => {
    setFilters(initialFilters);

    setSearchKey((prev) => prev + 1);
  };

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
