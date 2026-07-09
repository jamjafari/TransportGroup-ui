import PropTypes from 'prop-types';

export const DeleteButtonPropTypes = {
  onClick: PropTypes.func,

  loading: PropTypes.bool,

  disabled: PropTypes.bool,

  permission: PropTypes.string,

  tooltip: PropTypes.string,
};
