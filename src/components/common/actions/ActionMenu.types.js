import PropTypes from 'prop-types';

export const ActionMenuPropTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

      label: PropTypes.node.isRequired,

      icon: PropTypes.node,

      disabled: PropTypes.bool,

      onClick: PropTypes.func,
    }),
  ),

  iconButtonProps: PropTypes.object,
};

export const ActionMenuDefaultProps = {
  actions: [],

  iconButtonProps: {},
};
