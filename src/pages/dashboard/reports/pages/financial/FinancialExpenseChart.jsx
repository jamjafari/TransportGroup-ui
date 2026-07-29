import { Paper, Typography } from '@mui/material';

import { PieChart } from '@/components';

const FinancialExpenseChart = ({
  data = {
    labels: [],
    series: [],
  },
}) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>
        وضعیت هزینه ها
      </Typography>

      <PieChart labels={data.labels} series={data.series} />
    </Paper>
  );
};

export default FinancialExpenseChart;
