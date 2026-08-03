// modules/fleet/vehicles/constants.js

export const VEHICLE_STATUS = {
  ACTIVE: 1,
  IN_REPAIR: 2,
  INACTIVE: 3,
  SOLD: 4,
};

export const vehicleStatusOptions = [
  { value: VEHICLE_STATUS.ACTIVE, label: 'فعال' },
  { value: VEHICLE_STATUS.IN_REPAIR, label: 'در حال تعمیر' },
  { value: VEHICLE_STATUS.INACTIVE, label: 'غیرفعال' },
  { value: VEHICLE_STATUS.SOLD, label: 'فروخته‌شده' },
];

// فرض بر این بود که FuelType هم همین ۴ مقدار (بنزین/گازوئیل/دوگانه‌سوز/برقی) رو داره
// چون از قبل توی VehicleTechnicalSection.jsx تعریف شده بود، فعلاً همونجا نگه‌ داشتم؛
// اگه enum بک‌اندش رو فرستادی، میارمش اینجا کنار vehicleStatusOptions برای یکدست‌سازی.
export const FUEL_TYPE = {
  GASOLINE: 1,
  DIESEL: 2,
  HYBRID: 3,
  ELECTRIC: 4,
};

export const fuelTypeOptions = [
  { value: FUEL_TYPE.GASOLINE, label: 'بنزین' },
  { value: FUEL_TYPE.DIESEL, label: 'گازوئیل' },
  { value: FUEL_TYPE.HYBRID, label: 'دوگانه سوز' },
  { value: FUEL_TYPE.ELECTRIC, label: 'برقی' },
];
export const ATTACHMENT_OWNER_TYPE = {
  VEHICLE: 1,
  DRIVER: 2,
  EXPENSE: 3,
  VEHICLE_SERVICE: 4,
  FUEL_CARD: 5,
  FUEL_RECORD: 6,
  TIRE: 7,
};

export const attachmentCategoryOptions = [
  { value: 1, label: 'بیمه‌نامه' },
  { value: 2, label: 'معاینه فنی' },
  { value: 3, label: 'سند مالکیت' },
  { value: 4, label: 'کارت خودرو' },
  { value: 5, label: 'عکس' },
  { value: 0, label: 'سایر' },
];
