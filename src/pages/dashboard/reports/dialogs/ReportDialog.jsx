import { useNavigate } from 'react-router-dom';

import { AppDialog, DashboardGrid, DashboardColumn } from '@/components';

import reportCategories from '../constants/reportCategories';
import reportRoutes from '../routes/reportRoutes';

import ReportCategoryCard from '../components/ReportCategoryCard';
import ReportItem from '../components/ReportItem';

const ReportDialog = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleReportClick = (reportId) => {
    const route = reportRoutes.find((item) => item.id === reportId);

    if (!route) {
      console.warn(`Route not found : ${reportId}`);
      return;
    }

    onClose();

    navigate(route.path);
  };

  return (
    <AppDialog
      open={open}
      title="گزارش‌ها"
      maxWidth="lg"
      fullWidth
      onClose={onClose}
      dir="rtl"
    >
      <DashboardGrid>
        {reportCategories.map((category) => (
          <DashboardColumn key={category.id} md={6}>
            <ReportCategoryCard title={category.title} icon={category.icon}>
              {category.items.map((item) => (
                <ReportItem
                  key={item.id}
                  title={item.title}
                  onClick={() => handleReportClick(item.id)}
                />
              ))}
            </ReportCategoryCard>
          </DashboardColumn>
        ))}
      </DashboardGrid>
    </AppDialog>
  );
};

export default ReportDialog;
