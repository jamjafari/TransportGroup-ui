import { Paper, Typography } from '@mui/material';

import { PieChart } from '@/components';

const FBVFuelVsExpenseChart = ({
  data = {
    labels: [],
    series: [],
  },
}) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>
        وضعیت هزینه به سوخت
      </Typography>

      <PieChart labels={data.labels} series={data.series} tooltip legend />
    </Paper>
  );
};

export default FBVFuelVsExpenseChart;
