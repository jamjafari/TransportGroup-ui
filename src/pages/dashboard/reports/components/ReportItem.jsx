import { ListItemButton, ListItemText } from '@mui/material';

const ReportItem = ({ title, onClick }) => {
  return (
    <ListItemButton
      sx={{
        textAlign: 'right',
        borderRadius: 2,
        transition: 'all .2s ease',

        '&:hover': {
          bgcolor: 'primary.light',
          color: '#fff',
          transform: 'translateX(-4px)',
        },
      }}
      onClick={onClick}
    >
      <ListItemText primary={title} />
    </ListItemButton>
  );
};

export default ReportItem;
