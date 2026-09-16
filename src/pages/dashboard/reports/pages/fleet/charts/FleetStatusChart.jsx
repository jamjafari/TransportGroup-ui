import { Paper, Typography } from '@mui/material';

import { PieChart } from '@/components';

const FleetStatusChart = ({
  data = {
    labels: [],
    series: [],
  },
}) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h4" mb={2}>
        وضعیت ناوگان
      </Typography>

      <PieChart labels={data.labels} series={data.series} tooltip legend />
    </Paper>
  );
};

export default FleetStatusChart;
