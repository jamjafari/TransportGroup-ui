import { Paper, Typography } from '@mui/material';

import { BarChart } from '@/components';

const FleetExpenseChart = ({
  data = {
    categories: [],
    series: [],
  },
}) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>
        توزیع هزینه‌ها
      </Typography>

      <BarChart categories={data.categories} series={data.series} />
    </Paper>
  );
};

export default FleetExpenseChart;
