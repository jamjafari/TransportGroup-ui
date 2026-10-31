import { Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { LineChart } from '@/components';

const FleetFuelChart = ({
  data = {
    categories: [],
    series: [],
  },
}) => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="cardTitle" mb={2}>
        {t('روند مصرف سوخت')}
      </Typography>

      <LineChart
        categories={data.categories}
        series={data.series}
        tooltip
        legend
      />
    </Paper>
  );
};

export default FleetFuelChart;
