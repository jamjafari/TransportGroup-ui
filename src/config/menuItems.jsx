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
import FactCheckIcon from '@mui/icons-material/FactCheck';

// Report Icons
import RouteIcon from '@mui/icons-material/Route';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import SecurityIcon from '@mui/icons-material/Security';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import HistoryIcon from '@mui/icons-material/History';

export const menuItems = [
  {
    id: 'dashboard',
    label: 'داشبورد',
    icon: <DashboardIcon />,
    path: '/dashboard',
  },

  // =========================================================
  // مدیریت کاربران
  // =========================================================

  {
    id: 'admin-users',
    label: 'مدیریت کاربران',
    icon: <AdminPanelSettingsIcon />,
    path: '/admin/users',
    permission: 'User.View',
  },
  {
    id: 'admin-tenants',
    label: 'مدیریت سازمانها',
    icon: <AdminPanelSettingsIcon />,
    path: '/admin/tenants',
    permission: 'Tenant.ManageAll',
  },

  // =========================================================
  // ناوگان
  // =========================================================

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
        id: 'missions',
        label: 'ماموریت‌ها',
        icon: <LocalShippingIcon />,
        path: '/missions',
        permission: 'Mission.View',
      },

      {
        id: 'tires',
        label: 'تایر',
        icon: <AlbumIcon fontSize="small" />,
        path: '/tires',
        permission: 'Tire.View',
      },

      {
        id: 'services',
        label: 'سرویس خودرو',
        icon: <BuildIcon fontSize="small" />,
        path: '/services',
        permission: 'VehicleService.View',
      },

      {
        id: 'insurances',
        label: 'بیمه',
        icon: <CreditCardIcon fontSize="small" />,
        path: '/insurances',
        permission: 'Mission.View',
      },

      {
        id: 'inspections',
        label: 'معاینه فنی',
        icon: <FactCheckIcon fontSize="small" />,
        path: '/inspections',
        permission: 'Mission.View',
      },
      {
        id: 'accidents',
        label: 'تصادفات',
        icon: <CarCrashIcon fontSize="small" />,
        path: '/accidents',
        permission: 'Accident.View',
      },
    ],
  },

  // =========================================================
  // سوخت
  // =========================================================

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

  // =========================================================
  // هزینه‌ها
  // =========================================================

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
        permission: 'ExpenseType.View',
      },
    ],
  },

  // =========================================================
  // ماموریت‌ها
  // =========================================================

  // =========================================================
  // داده‌های پایه
  // =========================================================

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
        permission: 'Vendor.View',
      },

      {
        id: 'serviceTypes',
        label: 'نوع سرویس',
        icon: <BuildIcon fontSize="small" />,
        path: '/serviceTypes',
        permission: 'ServiceType.View',
      },

      {
        id: 'locations',
        label: 'مکان',
        icon: <PlaceIcon fontSize="small" />,
        path: '/locations',
        permission: 'Location.View',
      },
    ],
  },

  // =========================================================
  // تصادفات
  // =========================================================

  // =========================================================
  // گزارش‌ها
  // =========================================================

  {
    id: 'reports',
    label: 'گزارش‌ها',
    icon: <AssessmentIcon />,
    permission: 'Report.View',

    children: [
      {
        id: 'reports-missions',
        label: 'ماموریت‌ها',
        icon: <RouteIcon fontSize="small" />,
        path: '/reports/missions',
      },

      {
        id: 'reports-drivers',
        label: 'رانندگان',
        icon: <PeopleIcon fontSize="small" />,
        path: '/reports/drivers',
      },

      {
        id: 'reports-vehicles',
        label: 'خودروها',
        icon: <DirectionsCarFilledIcon fontSize="small" />,
        path: '/reports/vehicles',
      },

      {
        id: 'reports-fleet',
        label: 'ناوگان',
        icon: <DirectionsCarIcon fontSize="small" />,
        path: '/reports/fleet',
      },

      {
        id: 'reports-financial',
        label: 'مالی',
        icon: <AccountBalanceIcon fontSize="small" />,
        path: '/reports/financial',
      },

      {
        id: 'reports-fuelcost',
        label: 'هزینه سوخت',
        icon: <LocalGasStationOutlinedIcon fontSize="small" />,
        path: '/reports/fuelcost',
      },

      {
        id: 'reports-insurance',
        label: 'بیمه',
        icon: <SecurityIcon fontSize="small" />,
        path: '/reports/insurance',
      },

      {
        id: 'reports-inspection',
        label: 'معاینه فنی',
        icon: <FactCheckIcon fontSize="small" />,
        path: '/reports/inspection',
      },

      {
        id: 'reports-service',
        label: 'سرویس‌ها',
        icon: <BuildCircleIcon fontSize="small" />,
        path: '/reports/service',
      },

      {
        id: 'reports-latest',
        label: 'آخرین فعالیت‌ها',
        icon: <HistoryIcon fontSize="small" />,
        path: '/reports/latest-activities',
      },
    ],
  },
];

// =========================================================
// Permission Filter
// =========================================================

export const filterMenuByPermission = (items, canAny) => {
  return items
    .map((item) => {
      // اگر خود آیتم permission دارد،
      // ابتدا permission آن را بررسی می‌کنیم.
      if (item.permission && !canAny([item.permission])) {
        return null;
      }

      // اگر children دارد، فرزندان را نیز فیلتر می‌کنیم.
      if (item.children) {
        const filteredChildren = filterMenuByPermission(item.children, canAny);

        // اگر هیچ فرزند مجازی باقی نماند،
        // خود آیتم parent هم نمایش داده نمی‌شود.
        if (filteredChildren.length === 0) {
          return null;
        }

        return {
          ...item,
          children: filteredChildren,
        };
      }

      return item;
    })
    .filter(Boolean);
};

export default menuItems;
