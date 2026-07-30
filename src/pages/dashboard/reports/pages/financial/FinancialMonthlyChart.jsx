import { Paper, Typography } from '@mui/material';

import { AreaChart } from '@/components';

const FinancialMonthlyChart = ({
  data = {
    categories: [],
    series: [],
  },
}) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>
        هزینه های ماهانه
      </Typography>

      <AreaChart
        categories={data.categories}
        series={data.series}
        tooltip
        legend
      />
    </Paper>
  );
};

export default FinancialMonthlyChart;
