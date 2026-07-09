import PropTypes from 'prop-types';

export const DashboardHeaderPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  onRefresh: PropTypes.func,
};

export const DashboardHeaderDefaultProps = {
  title: 'Dashboard',

  subtitle: 'Fleet overview and operational status',

  onRefresh: undefined,
};
