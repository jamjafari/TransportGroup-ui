import PropTypes from 'prop-types';

export const DashboardRuntimePropTypes = {
  layout: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

      title: PropTypes.string,

      columns: PropTypes.number,

      widgets: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export const DashboardRuntimeDefaultProps = {
  layout: [],
};
