// تشخیص مسیر مقصد بعد از لاگین، بر اساس Permission های موجود در توکن کاربر
export const getPostLoginRedirect = (user) => {
  const permissions = user?.Permission || [];

  // چون فقط نقش راننده (DriverMobile) این Permission را دارد
  if (permissions.includes('Mission.RecordGps')) {
    return '/driver/missions';
  }

  return '/dashboard';
};
