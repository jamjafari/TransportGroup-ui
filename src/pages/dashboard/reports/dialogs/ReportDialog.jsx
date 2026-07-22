import { AppDialog, DashboardGrid, DashboardColumn } from '@/components';
import reportCategories from '../constants/reportCategories';
import ReportCategoryCard from '../components/ReportCategoryCard';

const ReportDialog = ({ open, onClose }) => {
  return (
    <AppDialog
      open={open}
      title="گزارش‌ها"
      maxWidth="lg"
      fullWidth
      onClose={onClose}
    >
      <DashboardGrid>
        {reportCategories.map((category) => (
          <DashboardColumn md={6} key={category.id}>
            <ReportCategoryCard title={category.title} icon={category.icon}>
              {category.items.map((item) => (
                <ReportItem
                  key={item.id}
                  title={item.title}
                  onClick={() => {
                    console.log(item.id);
                    onClose();
                  }}
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
