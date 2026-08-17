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
  LocationProvider,
  LocationListPage,
  LocationCreatePage,
  LocationEditPage,
  MissionProvider,
  MissionListPage,
  MissionCreatePage,
  MissionEditPage,
  UserProvider,
  UserListPage,
  UserCreatePage,
  UserEditPage,
} from '@/modules';

import MainLayout from '@/layouts/MainLayout';
import ProtectedRoute from './ProtectedRoute';
import PermissionRoute from './PermissionRoute';
import GuestRoute from './GuestRoute';
import Forbidden from '@/pages/errors/Forbidden';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/403" element={<Forbidden />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />

            {/* ===== گزارش‌ها ===== */}
            <Route element={<PermissionRoute permission="Report.View" />}>
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
            </Route>

            {/* ===== خودروها ===== */}
            <Route element={<PermissionRoute permission="Vehicle.View" />}>
              <Route
                path="/fleet/vehicles"
                element={
                  <VehicleProvider>
                    <VehicleListPage />
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
            </Route>
            <Route element={<PermissionRoute permission="Vehicle.Create" />}>
              <Route
                path="/fleet/vehicles/create"
                element={
                  <VehicleProvider>
                    <VehicleCreatePage />
                  </VehicleProvider>
                }
              />
            </Route>

            {/* ===== رانندگان ===== */}
            <Route element={<PermissionRoute permission="Driver.View" />}>
              <Route
                path="/drivers"
                element={
                  <DriverProvider>
                    <DriverListPage />
                  </DriverProvider>
                }
              />
              <Route
                path="/drivers/edit/:id"
                element={
                  <DriverProvider>
                    <DriverEditPage />
                  </DriverProvider>
                }
              />
            </Route>
            <Route element={<PermissionRoute permission="Driver.Create" />}>
              <Route
                path="/drivers/create"
                element={
                  <DriverProvider>
                    <DriverCreatePage />
                  </DriverProvider>
                }
              />
            </Route>

            {/* ===== تایر ===== */}
            <Route element={<PermissionRoute permission="Tire.View" />}>
              <Route
                path="/tires"
                element={
                  <TireProvider>
                    <TireListPage />
                  </TireProvider>
                }
              />
              <Route
                path="/tires/edit/:id"
                element={
                  <TireProvider>
                    <TireEditPage />
                  </TireProvider>
                }
              />
            </Route>
            <Route element={<PermissionRoute permission="Tire.Create" />}>
              <Route
                path="/tires/create"
                element={
                  <TireProvider>
                    <TireCreatePage />
                  </TireProvider>
                }
              />
            </Route>

            {/* ===== کارت سوخت ===== */}
            <Route element={<PermissionRoute permission="FuelCard.View" />}>
              <Route
                path="/fuelcards"
                element={
                  <FuelCardProvider>
                    <FuelCardListPage />
                  </FuelCardProvider>
                }
              />
              <Route
                path="/fuelcards/edit/:id"
                element={
                  <FuelCardProvider>
                    <FuelCardEditPage />
                  </FuelCardProvider>
                }
              />
            </Route>
            <Route element={<PermissionRoute permission="FuelCard.Create" />}>
              <Route
                path="/fuelcards/create"
                element={
                  <FuelCardProvider>
                    <FuelCardCreatePage />
                  </FuelCardProvider>
                }
              />
            </Route>

            {/* ===== سوخت‌گیری ===== */}
            <Route element={<PermissionRoute permission="FuelRecord.View" />}>
              <Route
                path="/fuelrecords"
                element={
                  <FuelRecordProvider>
                    <FuelRecordListPage />
                  </FuelRecordProvider>
                }
              />
              <Route
                path="/fuelrecords/edit/:id"
                element={
                  <FuelRecordProvider>
                    <FuelRecordEditPage />
                  </FuelRecordProvider>
                }
              />
            </Route>
            <Route element={<PermissionRoute permission="FuelRecord.Create" />}>
              <Route
                path="/fuelrecords/create"
                element={
                  <FuelRecordProvider>
                    <FuelRecordCreatePage />
                  </FuelRecordProvider>
                }
              />
            </Route>

            {/* ===== نوع هزینه ===== */}
            <Route element={<PermissionRoute permission="Expense.View" />}>
              <Route
                path="/expensetypes"
                element={
                  <ExpenseTypeProvider>
                    <ExpenseTypeListPage />
                  </ExpenseTypeProvider>
                }
              />
              <Route
                path="/expensetypes/edit/:id"
                element={
                  <ExpenseTypeProvider>
                    <ExpenseTypeEditPage />
                  </ExpenseTypeProvider>
                }
              />
            </Route>
            <Route element={<PermissionRoute permission="Expense.Create" />}>
              <Route
                path="/expensetypes/create"
                element={
                  <ExpenseTypeProvider>
                    <ExpenseTypeCreatePage />
                  </ExpenseTypeProvider>
                }
              />
            </Route>

            {/* ===== هزینه‌ها ===== */}
            <Route element={<PermissionRoute permission="Expense.View" />}>
              <Route
                path="/expenses"
                element={
                  <ExpenseProvider>
                    <ExpenseListPage />
                  </ExpenseProvider>
                }
              />
              <Route
                path="/expenses/edit/:id"
                element={
                  <ExpenseProvider>
                    <ExpenseEditPage />
                  </ExpenseProvider>
                }
              />
            </Route>
            <Route element={<PermissionRoute permission="Expense.Create" />}>
              <Route
                path="/expenses/create"
                element={
                  <ExpenseProvider>
                    <ExpenseCreatePage />
                  </ExpenseProvider>
                }
              />
            </Route>

            {/* ===== تامین‌کننده ===== */}
            <Route
              element={<PermissionRoute permission="VehicleService.View" />}
            >
              <Route
                path="/vendors"
                element={
                  <VendorProvider>
                    <VendorListPage />
                  </VendorProvider>
                }
              />
              <Route
                path="/vendors/edit/:id"
                element={
                  <VendorProvider>
                    <VendorEditPage />
                  </VendorProvider>
                }
              />
            </Route>
            <Route
              element={<PermissionRoute permission="VehicleService.Create" />}
            >
              <Route
                path="/vendors/create"
                element={
                  <VendorProvider>
                    <VendorCreatePage />
                  </VendorProvider>
                }
              />
            </Route>

            {/* ===== نوع سرویس ===== */}
            <Route
              element={<PermissionRoute permission="VehicleService.View" />}
            >
              <Route
                path="/servicetypes"
                element={
                  <ServiceTypeProvider>
                    <ServiceTypeListPage />
                  </ServiceTypeProvider>
                }
              />
              <Route
                path="/servicetypes/edit/:id"
                element={
                  <ServiceTypeProvider>
                    <ServiceTypeEditPage />
                  </ServiceTypeProvider>
                }
              />
            </Route>
            <Route
              element={<PermissionRoute permission="VehicleService.Create" />}
            >
              <Route
                path="/servicetypes/create"
                element={
                  <ServiceTypeProvider>
                    <ServiceTypeCreatePage />
                  </ServiceTypeProvider>
                }
              />
            </Route>

            {/* ===== مکان ===== */}
            <Route element={<PermissionRoute permission="Report.View" />}>
              <Route
                path="/locations"
                element={
                  <LocationProvider>
                    <LocationListPage />
                  </LocationProvider>
                }
              />
              <Route
                path="/locations/edit/:id"
                element={
                  <LocationProvider>
                    <LocationEditPage />
                  </LocationProvider>
                }
              />
              <Route
                path="/locations/create"
                element={
                  <LocationProvider>
                    <LocationCreatePage />
                  </LocationProvider>
                }
              />
            </Route>

            {/* ===== ماموریت‌ها ===== */}
            <Route element={<PermissionRoute permission="Report.View" />}>
              <Route
                path="/missions"
                element={
                  <MissionProvider>
                    <MissionListPage />
                  </MissionProvider>
                }
              />
              <Route
                path="/missions/edit/:id"
                element={
                  <MissionProvider>
                    <MissionEditPage />
                  </MissionProvider>
                }
              />
              <Route
                path="/missions/create"
                element={
                  <MissionProvider>
                    <MissionCreatePage />
                  </MissionProvider>
                }
              />
            </Route>

            {/* ===== کاربران ===== */}
            <Route element={<PermissionRoute permission="User.View" />}>
              <Route
                path="/admin/users"
                element={
                  <UserProvider>
                    <UserListPage />
                  </UserProvider>
                }
              />
              <Route
                path="/admin/users/edit/:id"
                element={
                  <UserProvider>
                    <UserEditPage />
                  </UserProvider>
                }
              />
            </Route>
            <Route element={<PermissionRoute permission="User.Create" />}>
              <Route
                path="/admin/users/create"
                element={
                  <UserProvider>
                    <UserCreatePage />
                  </UserProvider>
                }
              />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
