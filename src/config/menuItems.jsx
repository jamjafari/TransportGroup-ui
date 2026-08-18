import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleIcon from '@mui/icons-material/People';
import AlbumIcon from '@mui/icons-material/Album';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CategoryIcon from '@mui/icons-material/Category';
import StoreIcon from '@mui/icons-material/Store';
import BuildIcon from '@mui/icons-material/Build';
import PlaceIcon from '@mui/icons-material/Place';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CarCrashIcon from '@mui/icons-material/CarCrash';

export const menuItems = [
  {
    id: 'dashboard',
    label: 'داشبورد',
    icon: <DashboardIcon />,
    path: '/dashboard',
    // بدون permission → همیشه برای هر کاربر لاگین‌شده نمایش داده میشه
  },
  {
    id: 'admin-users',
    label: 'مدیریت کاربران',
    icon: <AdminPanelSettingsIcon />,
    path: '/admin/users',
    permission: 'User.View',
  },
  {
    id: 'fleet',
    label: 'ناوگان',
    icon: <DirectionsCarIcon />,
    children: [
      {
        id: 'fleet-vehicles',
        label: 'خودروها',
        icon: <DirectionsCarIcon fontSize="small" />,
        path: '/fleet/vehicles',
        permission: 'Vehicle.View',
      },
      {
        id: 'drivers',
        label: 'رانندگان',
        icon: <PeopleIcon fontSize="small" />,
        path: '/drivers',
        permission: 'Driver.View',
      },
      {
        id: 'tires',
        label: 'تایر',
        icon: <AlbumIcon fontSize="small" />,
        path: '/tires',
        permission: 'Tire.View',
      },
    ],
  },

  {
    id: 'fuel',
    label: 'سوخت',
    icon: <LocalGasStationIcon />,
    children: [
      {
        id: 'fuelcards',
        label: 'کارت سوخت',
        icon: <CreditCardIcon fontSize="small" />,
        path: '/fuelcards',
        permission: 'FuelCard.View',
      },
      {
        id: 'fuelrecords',
        label: 'سوخت‌گیری',
        icon: <LocalGasStationIcon fontSize="small" />,
        path: '/fuelrecords',
        permission: 'FuelRecord.View',
      },
    ],
  },

  {
    id: 'expenses-group',
    label: 'هزینه‌ها',
    icon: <ReceiptLongIcon />,
    children: [
      {
        id: 'expenses',
        label: 'هزینه جدید',
        icon: <ReceiptLongIcon fontSize="small" />,
        path: '/expenses',
        permission: 'Expense.View',
      },
      {
        id: 'expensetypes',
        label: 'نوع هزینه',
        icon: <CategoryIcon fontSize="small" />,
        path: '/expensetypes',
        permission: 'Expense.View',
      },
    ],
  },

  {
    id: 'missions',
    label: 'ماموریت‌ها',
    icon: <LocalShippingIcon />,
    path: '/missions',
    permission: 'Report.View', // ⚠️ فرض — چون Permission اختصاصی «Mission» تو JWT ندیدیم؛ اگه enum جدا داره بگو عوضش کنم
  },

  {
    id: 'master-data',
    label: 'داده‌های پایه',
    icon: <StoreIcon />,
    children: [
      {
        id: 'vendors',
        label: 'تامین‌کننده',
        icon: <StoreIcon fontSize="small" />,
        path: '/vendors',
        permission: 'VehicleService.View',
      },
      {
        id: 'serviceTypes',
        label: 'نوع سرویس',
        icon: <BuildIcon fontSize="small" />,
        path: '/serviceTypes',
        permission: 'VehicleService.View',
      },
      {
        id: 'locations',
        label: 'مکان',
        icon: <PlaceIcon fontSize="small" />,
        path: '/locations',
        permission: 'Report.View',
      },
    ],
  },
  {
    id: 'accidents',
    label: 'تصادفات',
    icon: <CarCrashIcon fontSize="small" />,
    path: '/accidents',
    permission: 'Accident.View',
  },
  {
    id: 'reports',
    label: 'گزارش‌ها',
    icon: <AssessmentIcon />,
    permission: 'Report.View',
    children: [
      {
        id: 'reports-missions',
        label: 'ماموریت‌ها',
        path: '/reports/missions',
      },
      { id: 'reports-drivers', label: 'رانندگان', path: '/reports/drivers' },
      { id: 'reports-vehicles', label: 'خودروها', path: '/reports/vehicles' },
      { id: 'reports-fleet', label: 'ناوگان', path: '/reports/fleet' },
      { id: 'reports-financial', label: 'مالی', path: '/reports/financial' },
      { id: 'reports-fbv', label: 'مالی بر اساس خودرو', path: '/reports/fbv' },
      {
        id: 'reports-fuelcost',
        label: 'هزینه سوخت',
        path: '/reports/fuelcost',
      },
      { id: 'reports-insurance', label: 'بیمه', path: '/reports/insurance' },
      { id: 'reports-service', label: 'سرویس‌ها', path: '/reports/service' },
      {
        id: 'reports-latest',
        label: 'آخرین فعالیت‌ها',
        path: '/reports/latest-activities',
      },
    ],
  },
];

export const filterMenuByPermission = (items, canAny) => {
  return items
    .map((item) => {
      if (item.children) {
        const filteredChildren = filterMenuByPermission(item.children, canAny);
        if (filteredChildren.length === 0) return null;
        return { ...item, children: filteredChildren };
      }

      if (item.permission && !canAny([item.permission])) {
        return null;
      }

      return item;
    })
    .filter(Boolean);
};

export default menuItems;
