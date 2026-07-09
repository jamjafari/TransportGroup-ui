import { getViews, saveViews } from './viewStorage';

export const createView = ({ name, state }) => {
  const views = getViews();

  const newView = {
    id: Date.now(),

    name,

    state,

    createdAt: new Date().toISOString(),
  };

  const updated = [...views, newView];

  saveViews(updated);

  return updated;
};

export const updateView = (id, state) => {
  const views = getViews();

  const updated = views.map((v) => {
    if (v.id === id) {
      return {
        ...v,
        state,
      };
    }

    return v;
  });

  saveViews(updated);

  return updated;
};

export const deleteView = (id) => {
  const views = getViews();

  const filtered = views.filter((v) => v.id !== id);

  saveViews(filtered);

  return filtered;
};
