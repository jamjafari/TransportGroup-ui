import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import LoginPage from '@/pages/auth/LoginPage';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import MissionReportPage from '@/pages/dashboard/reports/pages/missions';
import DriverReportPage from '@/pages/dashboard/reports/pages/drivers';
import VehicleReportPage from '@/pages/dashboard/reports/pages/vehicles';
import LatestActivitiesReportPage from '@/pages/dashboard/reports/pages/latest-activities';
import FleetReportPage from '@/pages/dashboard/reports/pages/fleet';
import FinancialReportPage from '@/pages/dashboard/reports/pages/financial';
import FBVReportPage from '@/pages/dashboard/reports/pages/financialbyvehicle';
import FuelCostReportPage from '@/pages/dashboard/reports/pages/fuelcosts';
import InsuranceReportPage from '@/pages/dashboard/reports/pages/insurance';
import ServiceReportPage from '@/pages/dashboard/reports/pages/services';
import DateRangeFinancialReportPage from '@/pages/dashboard/reports/pages/daterange';

import DashboardSearchProvider from '@/pages/dashboard/context/DashboardSearchProvider';

import ProtectedRoute from './ProtectedRoute';
import GuestRoute from './GuestRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<LoginPage />} />
        <Route path="/reports/missions" element={<MissionReportPage />} />
        <Route path="/reports/drivers" element={<DriverReportPage />} />
        <Route path="/reports/vehicles" element={<VehicleReportPage />} />
        <Route
          path="/reports/latest-activities"
          element={<LatestActivitiesReportPage />}
        />
        <Route
          path="/reports/financial-date"
          element={<DateRangeFinancialReportPage />}
        />
        <Route
          path="/reports/fleet"
          element={
            <DashboardSearchProvider>
              <FleetReportPage />
            </DashboardSearchProvider>
          }
        />
        <Route
          path="/reports/financial"
          element={
            <DashboardSearchProvider>
              <FinancialReportPage />
            </DashboardSearchProvider>
          }
        />
        <Route
          path="/reports/fbv"
          element={
            <DashboardSearchProvider>
              <FBVReportPage />
            </DashboardSearchProvider>
          }
        />
        <Route
          path="/reports/fuelcost"
          element={
            <DashboardSearchProvider>
              <FuelCostReportPage />
            </DashboardSearchProvider>
          }
        />
        <Route
          path="/reports/insurance"
          element={
            <DashboardSearchProvider>
              <InsuranceReportPage />
            </DashboardSearchProvider>
          }
        />
        <Route
          path="/reports/service"
          element={
            <DashboardSearchProvider>
              <ServiceReportPage />
            </DashboardSearchProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
