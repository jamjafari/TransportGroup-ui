import { AppCard } from '@/components';
const ReportCategoryCard = ({ title, icon, children }) => {
  return (
    <AppCard dir="rtl" title={`${icon} ${title}`}>
      {children}
    </AppCard>
  );
};

export default ReportCategoryCard;
