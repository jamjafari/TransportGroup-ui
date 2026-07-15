import PropTypes from 'prop-types';

export const ItemMenuPropTypes = {
  label: PropTypes.string.isRequired,

  icon: PropTypes.node,

  onClick: PropTypes.func,

  disabled: PropTypes.bool,
};

export const ItemMenuDefaultProps = {
  icon: null,

  onClick: null,

  disabled: false,
};
