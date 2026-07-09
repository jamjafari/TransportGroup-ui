import { useMemo } from 'react';

const useFuelConsumptionChart = () => {
  return useMemo(
    () => ({
      categories: ['1', '5', '10', '15', '20', '25', '30'],

      series: [
        {
          name: 'مصرف سوخت',

          data: [
            320,

            410,

            280,

            500,

            360,

            430,

            390,
          ],
        },
      ],
    }),
    [],
  );
};

export default useFuelConsumptionChart;
