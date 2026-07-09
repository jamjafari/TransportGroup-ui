import PropTypes from 'prop-types';

export const DashboardChartsPropTypes = {
  loading: PropTypes.bool,

  data: PropTypes.shape({
    fleetTrend: PropTypes.shape({
      categories: PropTypes.array,

      series: PropTypes.array,
    }),

    tripStatistics: PropTypes.shape({
      categories: PropTypes.array,

      series: PropTypes.array,
    }),

    vehicleStatus: PropTypes.shape({
      labels: PropTypes.array,

      series: PropTypes.array,
    }),
  }),
};

export const DashboardChartsDefaultProps = {
  loading: false,

  data: {
    fleetTrend: {
      categories: [],

      series: [],
    },

    tripStatistics: {
      categories: [],

      series: [],
    },

    vehicleStatus: {
      labels: [],

      series: [],
    },
  },
};
