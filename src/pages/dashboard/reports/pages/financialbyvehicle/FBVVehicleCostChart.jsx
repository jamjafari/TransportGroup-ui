import { Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { BarChart } from '@/components';

const FBVVehicleCostChart = ({
  data = {
    categories: [],
    series: [],
  },
}) => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="cardTitle" mb={2}>
        {t('هزینه های هر خودرو')}
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
