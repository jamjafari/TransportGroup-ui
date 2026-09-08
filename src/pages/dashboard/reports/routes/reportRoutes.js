import MissionReportPage from '../pages/missions/MissionReportPage';
import DriverReportPage from '../pages/drivers/DriverReportPage';
import VehicleReportPage from '../pages/vehicles/VehicleReportPage';
import FleetReportPage from '../pages/fleet/FleetReportPage';
import FinancialReportPage from '../pages/financial/FinancialReportPage';
import FBVReportPage from '../pages/financialbyvehicle/FBVReportPage';
import FuelCostReportPage from '../pages/fuelcosts/FuelCostReportPage';
import InsuranceReportPage from '../pages/insurance/InsuranceReportPage';
import ServiceReportPage from '../pages/services/ServiceReportPage';
import DateRangeFinancialReportPage from '../pages/daterange/DateRangeFinancialReportPage';
import DateRangeFuelCostReportPage from '../pages/fuelcosts-date/DateRangeFuelCostReportPage';

import LatestActivitiesReportPage from '../pages/latest-activities/LatestActivitiesReportPage';

const reportRoutes = [
  {
    id: 'missions',
    path: '/reports/missions',
    title: 'گزارش مأموریت‌ها',
    component: MissionReportPage,
  },
  {
    id: 'drivers',
    path: '/reports/drivers',
    title: 'گزارش راننده ها',
    component: DriverReportPage,
  },
  {
    id: 'vehicles',
    path: '/reports/vehicles',
    title: 'گزارش خودرو ها',
    component: VehicleReportPage,
  },
  {
    id: 'latest-activities',

    path: '/reports/latest-activities',
    title: 'گزارش آخرین فعالیت ها',

    component: LatestActivitiesReportPage,
  },
  {
    id: 'fleet',

    path: '/reports/fleet',
    title: 'گزارش  ناوگان',

    component: FleetReportPage,
  },
  {
    id: 'financial',

    path: '/reports/financial',
    title: 'گزارش  مالی',

    component: FinancialReportPage,
  },

  {
    id: 'fuelcost',

    path: '/reports/fuelcost',
    title: 'گزارش  مالی سوخت ',

    component: FuelCostReportPage,
  },
  {
    id: 'insurance',

    path: '/reports/insurance',
    title: 'گزارش   بیمه ',

    component: InsuranceReportPage,
  },
  {
    id: 'service',

    path: '/reports/service',
    title: 'گزارش   سرویس ',

    component: ServiceReportPage,
  },
];

export default reportRoutes;
