import React, { memo } from 'react';

import DashboardColumn from '../layout/DashboardColumn';

import getWidget from '../registry/getWidget';

import {
  WidgetRendererPropTypes,
  WidgetRendererDefaultProps,
} from './WidgetRenderer.types';

const WidgetRenderer = ({ widgetId, columns = 1 }) => {
  const widget = getWidget(widgetId);

  if (!widget) {
    return null;
  }

  const Component = widget.component;

  return (
    <DashboardColumn md={12 / columns}>
      <Component />
    </DashboardColumn>
  );
};

WidgetRenderer.propTypes = WidgetRendererPropTypes;
WidgetRenderer.defaultProps = WidgetRendererDefaultProps;
export default memo(WidgetRenderer);
