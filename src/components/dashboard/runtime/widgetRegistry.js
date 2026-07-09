const widgetRegistry = new Map();

export const registerWidget = (type, component) => {
  widgetRegistry.set(type, component);
};

export const getWidget = (type) => {
  return widgetRegistry.get(type);
};

export const getAllWidgets = () => {
  return Array.from(widgetRegistry.entries());
};
