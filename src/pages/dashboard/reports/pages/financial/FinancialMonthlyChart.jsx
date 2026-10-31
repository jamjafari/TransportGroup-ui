import { Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { AreaChart } from '@/components';

const FinancialMonthlyChart = ({
  data = {
    categories: [],
    series: [],
  },
}) => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="cardTitle" mb={2}>
        {t('هزینه های ماهانه')}
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
