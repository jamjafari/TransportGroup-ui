import PropTypes from 'prop-types';

export const WidgetRendererPropTypes = {
  widgetId: PropTypes.string.isRequired,

  columns: PropTypes.number,
};

export const WidgetRendererDefaultProps = {
  columns: 1,
};
