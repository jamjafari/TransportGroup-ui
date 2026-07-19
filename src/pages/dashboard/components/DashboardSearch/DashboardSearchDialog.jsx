import { AppDialog } from '@/components';

import DashboardSearchForm from './DashboardSearchForm';
import DashboardSearchActions from './DashboardSearchActions';

const DashboardSearchDialog = ({ open, onClose }) => {
  return (
    <AppDialog
      title="جستجوی داشبورد"
      open={open}
      maxWidth="md"
      fullWidth
      onClose={onClose}
    >
      <DashboardSearchForm />

      <DashboardSearchActions onClose={onClose} />
    </AppDialog>
  );
};

export default DashboardSearchDialog;
