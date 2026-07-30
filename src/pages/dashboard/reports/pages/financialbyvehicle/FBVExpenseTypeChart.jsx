import { Paper, Typography } from '@mui/material';

import { PieChart } from '@/components';

const FBVExpenseTypeChart = ({
  data = {
    labels: [],
    series: [],
  },
}) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>
        درصد انواع هزینه
      </Typography>

      <PieChart labels={data.labels} series={data.series} tooltip legend />
    </Paper>
  );
};

export default FBVExpenseTypeChart;
