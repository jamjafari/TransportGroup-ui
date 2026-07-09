export const useLayoutEngine = (layout, fields) => {
  if (!layout) return fields;

  const layoutMap = new Map();

  fields.forEach((field) => {
    layoutMap.set(field.name, field);
  });

  return layout.structure.map((item) => layoutMap.get(item)).filter(Boolean);
};
