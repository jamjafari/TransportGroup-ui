import { LAYOUT_TYPES, NODE_TYPES } from '../layout/layoutTypes';

const buildFieldNode = (field) => ({
  type: NODE_TYPES.FIELD,

  name: field.name,

  fieldType: field.type,

  ui: field.ui,

  state: field.state,

  props: field.props,

  options: field.options,

  rules: field.rules,

  condition: field.condition,

  disableIf: field.disableIf,
});

export const buildLayoutTree = (layout, fields) => {
  if (!layout) {
    return {
      type: LAYOUT_TYPES.GRID,

      spacing: 2,

      children: fields.map(buildFieldNode),
    };
  }

  switch (layout.type) {
    case LAYOUT_TYPES.ROW:
      return {
        ...layout,

        children: layout.children.map((child) =>
          buildLayoutTree(child, fields),
        ),
      };

    case LAYOUT_TYPES.COLUMN:
      return {
        ...layout,

        children: layout.children.map((child) =>
          buildLayoutTree(child, fields),
        ),
      };

    case LAYOUT_TYPES.GRID:
      return {
        ...layout,

        children: layout.fields.map((name) =>
          buildFieldNode(fields.find((f) => f.name === name)),
        ),
      };

    case LAYOUT_TYPES.GROUP:
      return {
        ...layout,

        children: layout.children.map((child) =>
          buildLayoutTree(child, fields),
        ),
      };

    case LAYOUT_TYPES.SECTION:
      return {
        ...layout,

        children: layout.children.map((child) =>
          buildLayoutTree(child, fields),
        ),
      };

    case LAYOUT_TYPES.TABS:
      return {
        ...layout,

        tabs: layout.tabs.map((tab) => ({
          ...tab,

          children: tab.children.map((child) => buildLayoutTree(child, fields)),
        })),
      };

    default:
      return null;
  }
};

export default buildLayoutTree;
