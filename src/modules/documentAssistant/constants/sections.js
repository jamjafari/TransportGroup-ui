// ✅ هر نوع سند به کدام بخش برنامه تعلق دارد، به کدام رکورد پیوست می‌شود و چطور رکورد پیشنهادی پیدا می‌شود.
//
// category همان مقادیر Attachment.Category است (برچسب‌ها مثل صفحه‌ی مدارک خودرو):
//   1 بیمه‌نامه، 2 معاینه فنی، 3 سند مالکیت، 4 کارت خودرو / گواهینامه، 5 عکس، 0 سایر

import { ATTACHMENT_OWNER_TYPE } from '@/constants/attachmentTypes';
import { getVehicles } from '@/modules/fleet/vehicles/api/vehicleApi';
import { getDrivers } from '@/modules/drivers/api/driverApi';
import { getExpenses } from '@/modules/expenses/api/expenseApi';
import { getServices } from '@/modules/services/api/serviceApi';
import { getFuelRecords } from '@/modules/fuelrecords/api/fuelRecordApi';
import { formatDate } from '@/utils';

// مقایسه بدون فاصله، خط تیره و حروف کوچک/بزرگ: «12ب345-67» == «12 ب 345 67»
export const squash = (value) =>
  String(value ?? '')
    .replace(/[\s\-–‌]/g, '')
    .toUpperCase();

export const plateToString = (plate) =>
  plate ? `${plate.twoDigits}${plate.letter}${plate.threeDigits}-${plate.region}` : '';

const dateDistance = (value, target) =>
  value && target ? Math.abs(new Date(value) - target) : Number.MAX_SAFE_INTEGER;

const vehicleSection = (category) => ({
  key: 'vehicles',
  label: 'خودروها',
  ownerType: ATTACHMENT_OWNER_TYPE.VEHICLE,
  module: 'Vehicle',
  category,
  editPath: (id) => `/fleet/vehicles/edit/${id}`,
  load: getVehicles,
  recordLabel: (v) => [v.plateNumber, [v.brand, v.model].filter(Boolean).join(' ')].filter(Boolean).join(' — '),
  // پلاک، شماره‌ی شاسی، VIN یا شماره‌ی موتور
  match: (v, f) => {
    const plate = squash(f.plate);
    const ids = [f.chassisNumber, f.vin, f.engineNumber].filter(Boolean).map(squash);
    if (plate && squash(v.plateNumber) === plate) return 'پلاک';
    if (ids.some((id) => id === squash(v.chassisNumber))) return 'شماره شاسی';
    if (f.engineNumber && squash(v.engineNumber) === squash(f.engineNumber)) return 'شماره موتور';
    return null;
  },
});

const invoiceSection = ({ key, label, ownerType, module, editPath, load, dateField, recordLabel }) => ({
  key,
  label,
  ownerType,
  module,
  category: 0,
  editPath,
  load,
  recordLabel,
  match: (r, f) => (f.invoiceNumber && squash(r.invoiceNumber) === squash(f.invoiceNumber) ? 'شماره فاکتور' : null),
  // بدون شماره‌ی فاکتور مشترک: رکوردهای نزدیک به تاریخ فاکتور اول
  sort: (records, f) => {
    const target = f.invoiceDate ? new Date(f.invoiceDate) : null;
    return target ? [...records].sort((a, b) => dateDistance(a[dateField], target) - dateDistance(b[dateField], target)) : records;
  },
});

export const SECTIONS = {
  drivers: {
    key: 'drivers',
    label: 'رانندگان',
    ownerType: ATTACHMENT_OWNER_TYPE.DERIVER,
    module: 'Driver',
    category: 4,
    editPath: (id) => `/drivers/edit/${id}`,
    load: getDrivers,
    recordLabel: (d) => [d.fullName, d.nationalCode].filter(Boolean).join(' — '),
    match: (d, f) => {
      if (f.nationalId && squash(d.nationalCode) === squash(f.nationalId)) return 'کد ملی';
      if (f.licenseNumber && squash(d.licenseNumber) === squash(f.licenseNumber)) return 'شماره گواهینامه';
      return null;
    },
  },
  expenses: invoiceSection({
    key: 'expenses',
    label: 'هزینه‌ها',
    ownerType: ATTACHMENT_OWNER_TYPE.EXPENSE,
    module: 'Expense',
    editPath: (id) => `/expenses/edit/${id}`,
    load: getExpenses,
    dateField: 'expenseDate',
    recordLabel: (e) =>
      [e.invoiceNumber, e.expensTypeName, e.vehiclePlateNumber, formatDate(e.expenseDate)].filter(Boolean).join(' — '),
  }),
  services: invoiceSection({
    key: 'services',
    label: 'سرویس و تعمیرات',
    ownerType: ATTACHMENT_OWNER_TYPE.VEHICLE_SERVICE,
    module: 'VehicleService',
    editPath: (id) => `/services/edit/${id}`,
    load: getServices,
    dateField: 'serviceDate',
    recordLabel: (s) => [s.plateNumber, s.servicType, s.vendorName, formatDate(s.serviceDate)].filter(Boolean).join(' — '),
  }),
  fuelRecords: invoiceSection({
    key: 'fuelRecords',
    label: 'سوخت‌گیری‌ها',
    ownerType: ATTACHMENT_OWNER_TYPE.FUEL_RECORD,
    module: 'FuelRecord',
    editPath: (id) => `/fuelrecords/edit/${id}`,
    load: getFuelRecords,
    dateField: 'fuelDate',
    recordLabel: (r) => [r.plateNumber, r.fuelStationName, formatDate(r.fuelDate)].filter(Boolean).join(' — '),
  }),
};

// نوع سند ← بخش‌های ممکن (اولی پیشنهاد پیش‌فرض)
export const sectionsFor = (documentType, fields = {}) => {
  switch (documentType) {
    case 'driver_license':
      return [SECTIONS.drivers];
    case 'insurance_policy':
      return [vehicleSection(1)];
    case 'technical_inspection':
      return [vehicleSection(2)];
    case 'vehicle_document':
      return [vehicleSection(3)];
    case 'vehicle_card':
      return [vehicleSection(4)];
    case 'invoice': {
      const order = { fuel: 'fuelRecords', service: 'services', tire: 'services' }[fields.kind] ?? 'expenses';
      const all = [SECTIONS.expenses, SECTIONS.services, SECTIONS.fuelRecords];
      return [SECTIONS[order], ...all.filter((s) => s.key !== order)];
    }
    default:
      return [];
  }
};

// کاربر به پیوست‌کردن در این بخش دسترسی دارد؟ (همان قاعده‌ی سرور: Create یا Edit)
export const canUseSection = (can, section) => can(`${section.module}.Create`) || can(`${section.module}.Edit`);

// همه‌ی بخش‌ها (برای تصمیم نمایش دکمه‌ی دستیار)
export const ALL_SECTION_MODULES = ['Vehicle', 'Driver', 'Expense', 'VehicleService', 'FuelRecord'];

// ---------------------------------------------------------------- به‌روزرسانی مشخصات خودرو

// FuelType در برنامه: 1 بنزین، 2 گازوئیل، 3 گاز/دوگانه‌سوز، 4 برقی
const FUEL_TYPE_BY_ASSISTANT = { gasoline: 1, diesel: 2, cng: 3, dual: 3, electric: 4 };

// فیلدهای دستیار ← فیلدهای خودرو (فقط برای کارت و سند خودرو)
export const VEHICLE_UPDATE_FIELDS = [
  { key: 'plate', vehicleField: 'plateNumber', label: 'پلاک' },
  { key: 'brand', vehicleField: 'brand', label: 'سیستم (برند)' },
  { key: 'model', vehicleField: 'model', label: 'تیپ (مدل)' },
  { key: 'productionYear', vehicleField: 'productionYear', label: 'سال ساخت' },
  { key: 'fuelType', vehicleField: 'fuelType', label: 'سوخت' },
  { key: 'engineNumber', vehicleField: 'engineNumber', label: 'شماره موتور' },
  { key: 'chassisNumber', vehicleField: 'chassisNumber', label: 'شماره شاسی' },
];

export const toVehicleValue = (key, value) => {
  if (value == null || value === '') return null;
  if (key === 'fuelType') return FUEL_TYPE_BY_ASSISTANT[value] ?? null;
  if (key === 'productionYear') {
    // خودرو سال ساخت را میلادی ذخیره می‌کند؛ سال سند ممکن است شمسی باشد (اول فروردین ⇐ سال + ۶۲۱)،
    // مستقل از تقویم فعال صفحه
    const year = Number(value);
    if (!Number.isInteger(year)) return null;
    return year < 1700 ? year + 621 : year;
  }
  return value;
};

export const VEHICLE_DOCUMENT_TYPES = ['vehicle_card', 'vehicle_document'];
