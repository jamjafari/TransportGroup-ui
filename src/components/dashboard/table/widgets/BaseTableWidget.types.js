import PropTypes from 'prop-types';

export const BaseTableWidgetPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  loading: PropTypes.bool,

  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  refresh: PropTypes.func,

  actions: PropTypes.node,

  footer: PropTypes.node,

  toolbar: PropTypes.node,

  children: PropTypes.node,

  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const BaseTableWidgetDefaultProps = {
  title: '',

  subtitle: '',

  loading: false,

  error: null,

  refresh: null,

  actions: null,

  footer: null,

  toolbar: null,

  children: null,

  height: '100%',
};
