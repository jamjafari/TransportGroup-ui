import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
import DateRangeFuelCostReportPage from '@/pages/dashboard/reports/pages/fuelcosts-date';

import DashboardSearchProvider from '@/pages/dashboard/context/DashboardSearchProvider';

import {
  VehicleProvider,
  VehicleListPage,
  VehicleCreatePage,
  VehicleEditPage,
  DriverProvider,
  DriverListPage,
  DriverCreatePage,
  DriverEditPage,
  TireProvider,
  TireListPage,
  TireCreatePage,
  TireEditPage,
  FuelCardProvider,
  FuelCardListPage,
  FuelCardCreatePage,
  FuelCardEditPage,
  FuelRecordProvider,
  FuelRecordListPage,
  FuelRecordCreatePage,
  FuelRecordEditPage,
  ExpenseTypeProvider,
  ExpenseTypeListPage,
  ExpenseTypeCreatePage,
  ExpenseTypeEditPage,
  ExpenseProvider,
  ExpenseListPage,
  ExpenseCreatePage,
  ExpenseEditPage,
  VendorProvider,
  VendorListPage,
  VendorCreatePage,
  VendorEditPage,
  ServiceTypeProvider,
  ServiceTypeListPage,
  ServiceTypeCreatePage,
  ServiceTypeEditPage,
} from '@/modules';
// import { VehicleListPage } from '@/modules';
// import VehicleCreatePage from '@/modules';
// import VehicleEditPage from '@/modules';

// import DriverProvider from '@/modules';
// import DriverListPage from '@/modules';
// import DriverCreatePage from '@/modules';
// import DriverEditPage from '@/modules';

// import TireProvider from '@/modules';
// import TireListPage from '@/modules';
// import TireCreatePage from '@/modules';
// import TireEditPage from '@/modules';

// import FuelCardProvider from '@/modules';
// import FuelCardListPage from '@/modules';
// import FuelCardCreatePage from '@/modules';
// import FuelCardEditPage from '@/modules';

import MainLayout from '@/layouts/MainLayout';
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
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />

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
              path="/reports/fuelcost-date"
              element={<DateRangeFuelCostReportPage />}
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

            <Route
              path="/fleet/vehicles"
              element={
                <VehicleProvider>
                  <VehicleListPage />
                </VehicleProvider>
              }
            />
            <Route
              path="/fleet/vehicles/create"
              element={
                <VehicleProvider>
                  <VehicleCreatePage />
                </VehicleProvider>
              }
            />
            <Route
              path="/fleet/vehicles/edit/:id"
              element={
                <VehicleProvider>
                  <VehicleEditPage />
                </VehicleProvider>
              }
            />
            <Route
              path="drivers"
              element={
                <DriverProvider>
                  <DriverListPage />
                </DriverProvider>
              }
            />
            <Route
              path="drivers/create"
              element={
                <DriverProvider>
                  <DriverCreatePage />
                </DriverProvider>
              }
            />
            <Route
              path="drivers/edit/:id"
              element={
                <DriverProvider>
                  <DriverEditPage />
                </DriverProvider>
              }
            />
            <Route
              path="tires"
              element={
                <TireProvider>
                  <TireListPage />
                </TireProvider>
              }
            />
            <Route
              path="Tires/create"
              element={
                <TireProvider>
                  <TireCreatePage />
                </TireProvider>
              }
            />
            <Route
              path="tires/edit/:id"
              element={
                <TireProvider>
                  <TireEditPage />
                </TireProvider>
              }
            />
            <Route
              path="fuelcards"
              element={
                <FuelCardProvider>
                  <FuelCardListPage />
                </FuelCardProvider>
              }
            />
            <Route
              path="fuelcards/create"
              element={
                <FuelCardProvider>
                  <FuelCardCreatePage />
                </FuelCardProvider>
              }
            />
            <Route
              path="fuelcards/edit/:id"
              element={
                <FuelCardProvider>
                  <FuelCardEditPage />
                </FuelCardProvider>
              }
            />
            <Route
              path="fuelrecords"
              element={
                <FuelRecordProvider>
                  <FuelRecordListPage />
                </FuelRecordProvider>
              }
            />
            <Route
              path="fuelrecords/create"
              element={
                <FuelRecordProvider>
                  <FuelRecordCreatePage />
                </FuelRecordProvider>
              }
            />
            <Route
              path="fuelrecords/edit/:id"
              element={
                <FuelRecordProvider>
                  <FuelRecordEditPage />
                </FuelRecordProvider>
              }
            />
            <Route
              path="expensetypes"
              element={
                <ExpenseTypeProvider>
                  <ExpenseTypeListPage />
                </ExpenseTypeProvider>
              }
            />
            <Route
              path="expensetypes/create"
              element={
                <ExpenseTypeProvider>
                  <ExpenseTypeCreatePage />
                </ExpenseTypeProvider>
              }
            />
            <Route
              path="expensetypes/edit/:id"
              element={
                <ExpenseTypeProvider>
                  <ExpenseTypeEditPage />
                </ExpenseTypeProvider>
              }
            />
            <Route
              path="expenses"
              element={
                <ExpenseProvider>
                  <ExpenseListPage />
                </ExpenseProvider>
              }
            />
            <Route
              path="expenses/create"
              element={
                <ExpenseProvider>
                  <ExpenseCreatePage />
                </ExpenseProvider>
              }
            />
            <Route
              path="expenses/edit/:id"
              element={
                <ExpenseProvider>
                  <ExpenseEditPage />
                </ExpenseProvider>
              }
            />
            <Route
              path="vendors"
              element={
                <VendorProvider>
                  <VendorListPage />
                </VendorProvider>
              }
            />
            <Route
              path="vendors/create"
              element={
                <VendorProvider>
                  <VendorCreatePage />
                </VendorProvider>
              }
            />
            <Route
              path="vendors/edit/:id"
              element={
                <VendorProvider>
                  <VendorEditPage />
                </VendorProvider>
              }
            />
            <Route
              path="servicetypes"
              element={
                <ServiceTypeProvider>
                  <ServiceTypeListPage />
                </ServiceTypeProvider>
              }
            />
            <Route
              path="servicetypes/create"
              element={
                <ServiceTypeProvider>
                  <ServiceTypeCreatePage />
                </ServiceTypeProvider>
              }
            />
            <Route
              path="servicetypes/edit/:id"
              element={
                <ServiceTypeProvider>
                  <ServiceTypeEditPage />
                </ServiceTypeProvider>
              }
            />
          </Route>
        </Route>

        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
