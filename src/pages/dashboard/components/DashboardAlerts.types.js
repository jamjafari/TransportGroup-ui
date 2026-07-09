import PropTypes from 'prop-types';

export const DashboardAlertsPropTypes = {
  loading: PropTypes.bool,

  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

      severity: PropTypes.oneOf(['success', 'info', 'warning', 'error']),

      title: PropTypes.string,

      description: PropTypes.string,
    }),
  ),
};

export const DashboardAlertsDefaultProps = {
  loading: false,

  data: [],
};
