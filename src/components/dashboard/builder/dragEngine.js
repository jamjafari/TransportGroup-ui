export const createDragEngine = ({ onUpdateLayout }) => {
  let dragging = null;

  const startDrag = (widgetId) => {
    dragging = widgetId;
  };

  const updateDrag = (position) => {
    if (!dragging) return;

    onUpdateLayout(dragging, position);
  };

  const endDrag = () => {
    dragging = null;
  };

  return {
    startDrag,

    updateDrag,

    endDrag,
  };
};
