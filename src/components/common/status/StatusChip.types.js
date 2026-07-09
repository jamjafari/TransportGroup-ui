import PropTypes from 'prop-types';

export const StatusChipPropTypes = {
  label: PropTypes.string,

  status: PropTypes.string,

  color: PropTypes.oneOf([
    'default',

    'primary',

    'secondary',

    'success',

    'error',

    'warning',

    'info',
  ]),

  size: PropTypes.oneOf(['small', 'medium']),

  variant: PropTypes.oneOf(['filled', 'outlined']),
};

export const StatusChipDefaultProps = {
  status: 'inactive',

  size: 'small',

  variant: 'filled',
};
