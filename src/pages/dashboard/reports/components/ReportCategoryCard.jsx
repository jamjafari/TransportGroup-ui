const ReportCategoryCard = ({ title, icon, children }) => {
  return <AppCard title={`${icon} ${title}`}>{children}</AppCard>;
};

export default ReportCategoryCard;
