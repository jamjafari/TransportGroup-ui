export const createDashboard = ({ id, title, layout = [], widgets = [] }) => {
  return {
    id,

    title,

    layout,

    widgets,

    createdAt: new Date().toISOString(),

    updatedAt: new Date().toISOString(),
  };
};
