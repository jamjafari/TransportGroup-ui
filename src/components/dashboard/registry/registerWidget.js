import WidgetRegistry from './WidgetRegistry';

const registerWidget = ({
  id,

  component,

  permission,

  category,
}) => {
  WidgetRegistry.set(id, {
    id,

    component,

    permission,

    category,
  });
};

export default registerWidget;
