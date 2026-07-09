import WidgetRegistry from './WidgetRegistry';

const registerWidget = ({
  id,

  component,

  permission,

  type,

  category,
}) => {
  WidgetRegistry.set(id, {
    id,

    component,

    permission,

    type,

    category,
  });
};

export default registerWidget;
