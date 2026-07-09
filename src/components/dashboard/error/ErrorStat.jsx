import React from 'react';

import DashboardError from './DashboardError';

const ErrorStat = ({ onRetry }) => (
  <DashboardError
    title="خطا در بارگذاری آمار"

    description="اطلاعات آماری قابل دریافت نیست."

    onRetry={onRetry}
  />
);

export default ErrorStat;
