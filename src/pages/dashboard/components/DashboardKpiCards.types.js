import PropTypes from 'prop-types';

export const DashboardKpiCardsPropTypes = {
  loading: PropTypes.bool,

  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

      title: PropTypes.string.isRequired,

      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,

      description: PropTypes.string,

      status: PropTypes.string,

      statusColor: PropTypes.string,
    }),
  ),
};

export const DashboardKpiCardsDefaultProps = {
  loading: false,

  data: [],
};
