import PropTypes from 'prop-types';

export const BaseCardPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  icon: PropTypes.node,

  action: PropTypes.node,

  footer: PropTypes.node,

  children: PropTypes.node,

  elevation: PropTypes.number,
};

export const BaseCardDefaultProps = {
  title: '',

  subtitle: '',

  icon: null,

  action: null,

  footer: null,

  children: null,

  elevation: 1,
};
