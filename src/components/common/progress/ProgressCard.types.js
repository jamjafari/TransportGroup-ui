import PropTypes from 'prop-types';

export const ProgressCardPropTypes = {
  title: PropTypes.string,

  value: PropTypes.number.isRequired,

  color: PropTypes.oneOf([
    'primary',

    'secondary',

    'success',

    'error',

    'warning',

    'info',
  ]),
};

export const ProgressCardDefaultProps = {
  title: '',

  color: 'primary',
};
