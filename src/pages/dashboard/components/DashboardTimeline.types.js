import PropTypes from 'prop-types';

export const DashboardTimelinePropTypes = {
  loading: PropTypes.bool,

  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

      title: PropTypes.string.isRequired,

      description: PropTypes.string,

      time: PropTypes.string,

      color: PropTypes.string,

      icon: PropTypes.node,
    }),
  ),
};

export const DashboardTimelineDefaultProps = {
  loading: false,

  data: [],
};
