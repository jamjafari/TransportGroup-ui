import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/auth/Login';

import Dashboard from '../pages/dashboard/Dashboard';

import MainLayout from '../layouts/MainLayout';

import ProtectedRoute from './ProtectedRoute';
import AuthLayout from '../layouts/AuthLayout';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* صفحات عمومی */}

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* صفحات محافظت شده */}

        <Route element={<ProtectedRoute />}>
          <Route
            path="/"

            element={<MainLayout />}
          >
            <Route
              index

              element={<Dashboard />}
            />
          </Route>
        </Route>

        <Route
          path="*"

          element={<Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
