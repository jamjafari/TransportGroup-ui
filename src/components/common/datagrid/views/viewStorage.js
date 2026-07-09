const STORAGE_KEY = 'app_datagrid_views';

export const getViews = () => {
  const raw = localStorage.getItem(STORAGE_KEY);

  return raw ? JSON.parse(raw) : [];
};

export const saveViews = (views) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(views));
};
