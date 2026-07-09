import React from 'react';

import DashboardError from './DashboardError';

const ErrorCard = ({ onRetry }) => (
  <DashboardError
    title="خطا در بارگذاری کارت"

    description="اطلاعات کارت قابل دریافت نیست."

    onRetry={onRetry}
  />
);

export default ErrorCard;
