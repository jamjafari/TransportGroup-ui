import PropTypes from 'prop-types';

export const DashboardPermissionPropTypes = {
  permission: PropTypes.string.isRequired,

  children: PropTypes.node,

  fallback: PropTypes.node,
};

export const DashboardPermissionDefaultProps = {
  fallback: null,
};
