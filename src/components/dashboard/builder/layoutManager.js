export const updateLayoutItem = (layout, widgetId, newPos) => {
  return layout.map((item) => {
    if (item.i === widgetId) {
      return {
        ...item,
        ...newPos,
      };
    }

    return item;
  });
};
