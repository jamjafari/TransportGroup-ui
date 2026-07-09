import { useMemo } from 'react';

const useChartSeries = (
  rows = [],

  {
    categoryField,

    series = [],
  },
) => {
  return useMemo(() => {
    if (!rows.length) {
      return {
        categories: [],

        series: [],
      };
    }

    const categories = rows.map((row) => row[categoryField]);

    const chartSeries = series.map((item) => ({
      name: item.name,

      color: item.color,

      data: rows.map((row) => row[item.field]),
    }));

    return {
      categories,

      series: chartSeries,
    };
  }, [rows, categoryField, series]);
};

export default useChartSeries;
