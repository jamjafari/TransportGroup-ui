import React from 'react';

import DashboardError from './DashboardError';

const ErrorTable = ({ onRetry }) => (
  <DashboardError
    title="خطا در بارگذاری جدول"

    description="اطلاعات جدول قابل دریافت نیست."

    onRetry={onRetry}
  />
);

export default ErrorTable;
