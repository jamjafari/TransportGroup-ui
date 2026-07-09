import registerWidget from './registerWidget';

import WidgetTypes from './WidgetTypes';

import WidgetCategory from './WidgetCategory';

/* ========================= */
/* Charts */
/* ========================= */

import FuelConsumptionChart from '../chart/FuelConsumptionChart';
import VehicleStatusChart from '../chart/VehicleStatusChart';
import ExpensePieChart from '../chart/ExpensePieChart';
import MonthlyCostChart from '../chart/MonthlyCostChart';

/* ========================= */
/* Tables */
/* ========================= */

import VehicleTable from '../table/VehicleTable';
import DriverTable from '../table/DriverTable';
import FuelRecordTable from '../table/FuelRecordTable';
import ExpenseTable from '../table/ExpenseTable';
import MissionTable from '../table/MissionTable';
import InsuranceTable from '../table/InsuranceTable';
import ServiceReminderTable from '../table/ServiceReminderTable';

/* ===================================================== */
/* Register Widgets                                       */
/* ===================================================== */

const DashboardWidgets = () => {
  /* ========================= */
  /* Charts */
  /* ========================= */

  registerWidget({
    id: 'fuel.chart',

    component: FuelConsumptionChart,

    permission: 'Dashboard.Fuel.Chart.View',

    type: WidgetTypes.CHART,

    category: WidgetCategory.FUEL,
  });

  registerWidget({
    id: 'vehicle.chart',

    component: VehicleStatusChart,

    permission: 'Dashboard.Vehicle.Chart.View',

    type: WidgetTypes.CHART,

    category: WidgetCategory.VEHICLE,
  });

  registerWidget({
    id: 'expense.chart',

    component: ExpensePieChart,

    permission: 'Dashboard.Expense.Chart.View',

    type: WidgetTypes.CHART,

    category: WidgetCategory.EXPENSE,
  });

  registerWidget({
    id: 'monthly.chart',

    component: MonthlyCostChart,

    permission: 'Dashboard.Monthly.Chart.View',

    type: WidgetTypes.CHART,

    category: WidgetCategory.SYSTEM,
  });

  /* ========================= */
  /* Tables */
  /* ========================= */

  registerWidget({
    id: 'vehicle.table',

    component: VehicleTable,

    permission: 'Dashboard.Vehicle.View',

    type: WidgetTypes.TABLE,

    category: WidgetCategory.VEHICLE,
  });

  registerWidget({
    id: 'driver.table',

    component: DriverTable,

    permission: 'Dashboard.Driver.View',

    type: WidgetTypes.TABLE,

    category: WidgetCategory.DRIVER,
  });

  registerWidget({
    id: 'fuel.table',

    component: FuelRecordTable,

    permission: 'Dashboard.Fuel.View',

    type: WidgetTypes.TABLE,

    category: WidgetCategory.FUEL,
  });

  registerWidget({
    id: 'expense.table',

    component: ExpenseTable,

    permission: 'Dashboard.Expense.View',

    type: WidgetTypes.TABLE,

    category: WidgetCategory.EXPENSE,
  });

  registerWidget({
    id: 'mission.table',

    component: MissionTable,

    permission: 'Dashboard.Mission.View',

    type: WidgetTypes.TABLE,

    category: WidgetCategory.MISSION,
  });

  registerWidget({
    id: 'insurance.table',

    component: InsuranceTable,

    permission: 'Dashboard.Insurance.View',

    type: WidgetTypes.TABLE,

    category: WidgetCategory.INSURANCE,
  });

  registerWidget({
    id: 'service.table',

    component: ServiceReminderTable,

    permission: 'Dashboard.Service.View',

    type: WidgetTypes.TABLE,

    category: WidgetCategory.SERVICE,
  });
};

export default DashboardWidgets;
