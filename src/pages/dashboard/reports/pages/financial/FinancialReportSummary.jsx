import { Paper, Stack, Typography } from "@mui/material";

import { DashboardGrid, DashboardColumn } from "@/components";
import { useTranslation } from "react-i18next";
import { formatNumber } from '@/utils';

const FinancialReportSummary = ({ summary = {} }) => {
  const { t } = useTranslation();
  const items = [
    { title: "کل هزینه‌ها", value: summary.total ?? 0 },
    { title: "هزینه‌های سوخت", value: summary.totalFuel ?? 0 },
    { title: "سایر هزینه‌ها", value: summary.totalExpense ?? 0 },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} md={4}>
          <Paper sx={{ p: 2, borderRadius: 2 }}>
            <Stack spacing={1}>
              <Typography variant="statLabel" color="text.secondary">{t(item.title)}</Typography>
              <Typography variant="statValue">
                {formatNumber(item.value)}
              </Typography>
            </Stack>
          </Paper>
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default FinancialReportSummary;
