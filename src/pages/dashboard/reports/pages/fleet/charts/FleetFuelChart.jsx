import { Paper, Typography } from '@mui/material';

import { LineChart } from '@/components';

const FleetFuelChart = ({
  data = {
    categories: [],
    series: [],
  },
}) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>
        روند مصرف سوخت
      </Typography>

      <LineChart categories={data.categories} series={data.series} />
    </Paper>
  );
};

export default FleetFuelChart;
