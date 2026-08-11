import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';

export const menuItems = [
  {
    id: 'dashboard',
    label: 'داشبورد',
    icon: <DashboardIcon />,
    path: '/dashboard',
  },
  {
    id: 'fleet-vehicles',
    label: 'خودروها',
    icon: <DirectionsCarIcon />,
    path: '/fleet/vehicles',
  },
  {
    id: 'drivers',
    label: 'رانندگان',
    icon: <PeopleIcon />,
    path: '/drivers',
  },
  {
    id: 'tires',
    label: 'تایر',
    icon: <PeopleIcon />,
    path: '/tires',
  },
  {
    id: 'fuelcards',
    label: 'کارت سوخت',
    icon: <PeopleIcon />,
    path: '/fuelcards',
  },
  {
    id: 'fuelrecords',
    label: ' سوختگیری',
    icon: <PeopleIcon />,
    path: '/fuelrecords',
  },
  {
    id: 'expensetypes',
    label: ' نوع هزینه',
    icon: <PeopleIcon />,
    path: '/expensetypes',
  },
  {
    id: 'expenses',
    label: '  هزینه جدید',
    icon: <PeopleIcon />,
    path: '/expenses',
  },
  {
    id: 'vendors',
    label: 'تامین کننده',
    icon: <PeopleIcon />,
    path: '/vendors',
  },
  {
    id: 'serviceTypes',
    label: 'نوع سرویس ',
    icon: <PeopleIcon />,
    path: '/serviceTypes',
  },
  {
    id: 'reports',
    label: 'گزارش‌ها',
    icon: <AssessmentIcon />,
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

export default menuItems;
