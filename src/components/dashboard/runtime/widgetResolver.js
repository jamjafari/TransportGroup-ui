import { getWidget } from './widgetRegistry';

export const resolveWidget = (widget) => {
  const Component = getWidget(widget.type);

  if (!Component) {
    throw new Error(`Widget type "${widget.type}" not registered`);
  }

  return Component;
};
