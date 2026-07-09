import PropTypes from 'prop-types';

export const AppBreadcrumbPropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,

      to: PropTypes.string,
    }),
  ),

  separator: PropTypes.node,

  maxItems: PropTypes.number,
};

export const AppBreadcrumbDefaultProps = {
  items: [],

  separator: undefined,

  maxItems: 8,
};
