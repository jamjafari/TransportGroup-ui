import PropTypes from 'prop-types';

export const AppTabsPropTypes = {
  value: PropTypes.any,

  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,

      label: PropTypes.node.isRequired,

      icon: PropTypes.node,

      disabled: PropTypes.bool,
    }),
  ),

  onChange: PropTypes.func,

  variant: PropTypes.oneOf(['standard', 'fullWidth', 'scrollable']),

  centered: PropTypes.bool,

  scrollButtons: PropTypes.oneOf([true, false, 'auto']),

  sx: PropTypes.object,
};

export const AppTabsDefaultProps = {
  value: 0,

  tabs: [],

  onChange: () => {},

  variant: 'standard',

  centered: false,

  scrollButtons: 'auto',

  sx: {},
};
