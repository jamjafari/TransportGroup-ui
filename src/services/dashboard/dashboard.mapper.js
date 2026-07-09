import FuelConsumptionChart from '../components/dashboard/chart/FuelConsumptionChart';
import FuelCostChart from '../components/dashboard/chart/FuelCostChart';
import VehicleStatusChart from '../components/dashboard/chart/VehicleStatusChart';
import VehicleUsageChart from '../components/dashboard/chart/VehicleUsageChart';
import MonthlyDistanceChart from '../components/dashboard/chart/MonthlyDistanceChart';
import ExpenseChart from '../components/dashboard/chart/ExpenseChart';
import MissionChart from '../components/dashboard/chart/MissionChart';
import DriverPerformanceChart from '../components/dashboard/chart/DriverPerformanceChart';

import { DASHBOARD_WIDGETS } from '../constants/dashboard.constants';

export const DashboardMapper = {
  [DASHBOARD_WIDGETS.FUEL_CONSUMPTION]: FuelConsumptionChart,

  [DASHBOARD_WIDGETS.FUEL_COST]: FuelCostChart,

  [DASHBOARD_WIDGETS.VEHICLE_STATUS]: VehicleStatusChart,

  [DASHBOARD_WIDGETS.VEHICLE_USAGE]: VehicleUsageChart,

  [DASHBOARD_WIDGETS.MONTHLY_DISTANCE]: MonthlyDistanceChart,

  [DASHBOARD_WIDGETS.EXPENSE]: ExpenseChart,

  [DASHBOARD_WIDGETS.MISSION]: MissionChart,

  [DASHBOARD_WIDGETS.DRIVER_PERFORMANCE]: DriverPerformanceChart,
};
