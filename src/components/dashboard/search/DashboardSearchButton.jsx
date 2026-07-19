import Button from '@mui/material/Button';

import FilterAltIcon from '@mui/icons-material/FilterAlt';

const DashboardSearchButton = ({ onClick }) => {
  return (
    <Button variant="outlined" startIcon={<FilterAltIcon />} onClick={onClick}>
      جستجو
    </Button>
  );
};

export default DashboardSearchButton;
