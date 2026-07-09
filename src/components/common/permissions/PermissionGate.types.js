import PropTypes from 'prop-types';

export const PermissionGatePropTypes = {
  permission: PropTypes.oneOfType([
    PropTypes.string,

    PropTypes.arrayOf(PropTypes.string),
  ]),

  fallback: PropTypes.node,

  children: PropTypes.node.isRequired,
};
