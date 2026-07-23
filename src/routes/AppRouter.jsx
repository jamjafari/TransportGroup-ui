import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import LoginPage from '@/pages/auth/LoginPage';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import MissionReportPage from '@/pages/dashboard/reports/pages/missions';

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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
