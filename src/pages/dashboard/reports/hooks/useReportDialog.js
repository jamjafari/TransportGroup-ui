import { use } from 'react';

const useReportDialog = () => {
  const [open, setOpen] = useState(false);

  return {
    open,
    openDialog: () => setOpen(true),
    closeDialog: () => setOpen(false),
  };
};

export default useReportDialog;
