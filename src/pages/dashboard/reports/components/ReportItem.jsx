import { ListItemButton, ListItemText } from '@mui/material';

const ReportItem = ({ title, onClick }) => {
  return (
    <ListItemButton onClick={onClick}>
      <ListItemText primary={title} />
    </ListItemButton>
  );
};

export default ReportItem;
