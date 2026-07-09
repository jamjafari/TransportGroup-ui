import PropTypes from 'prop-types';

export const AppMenuPropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

      label: PropTypes.string.isRequired,

      path: PropTypes.string.isRequired,

      icon: PropTypes.node,
    }),
  ).isRequired,

  collapsed: PropTypes.bool,
};

export const AppMenuDefaultProps = {
  collapsed: false,
};
