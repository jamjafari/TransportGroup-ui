import { Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { PieChart } from '@/components';

const FBVFuelVsExpenseChart = ({
  data = {
    labels: [],
    series: [],
  },
}) => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="cardTitle" mb={2}>
        {t('وضعیت هزینه به سوخت')}
      </Typography>

      <PieChart labels={data.labels} series={data.series} tooltip legend />
    </Paper>
  );
};

export default FBVFuelVsExpenseChart;
