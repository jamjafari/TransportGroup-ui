import PropTypes from 'prop-types';

export const AppContentPropTypes = {
  children: PropTypes.node,

  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const AppContentDefaultProps = {
  children: null,

  padding: 3,
};
