import React from 'react';

import DashboardError from './DashboardError';

const ErrorChart = ({ onRetry }) => (
  <DashboardError
    title="خطا در بارگذاری نمودار"

    description="اطلاعات نمودار قابل دریافت نیست."

    onRetry={onRetry}
  />
);

export default ErrorChart;
