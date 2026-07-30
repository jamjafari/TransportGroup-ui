import { Paper, Typography } from '@mui/material';

import { BarChart } from '@/components';

const FBVVehicleCostChart = ({
  data = {
    categories: [],
    series: [],
  },
}) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>
        هزینه های هر خودرو
      </Typography>

      <BarChart
        categories={data.categories}
        series={data.series}
        tooltip
        legend
      />
    </Paper>
  );
};

export default FBVVehicleCostChart;
