import { useState } from 'react';

import { createView, updateView, deleteView } from './viewManager';

import { getViews } from './viewStorage';

const useSavedViews = () => {
  const [views, setViews] = useState(getViews());

  const [activeView, setActiveView] = useState(null);

  const saveNewView = (name, state) => {
    const updated = createView({
      name,
      state,
    });

    setViews(updated);
  };

  const modifyView = (id, state) => {
    const updated = updateView(id, state);

    setViews(updated);
  };

  const removeView = (id) => {
    const updated = deleteView(id);

    setViews(updated);
  };

  const loadView = (view) => {
    setActiveView(view.id);

    return view.state;
  };

  return {
    views,

    activeView,

    setActiveView,

    saveNewView,

    modifyView,

    removeView,

    loadView,
  };
};

export default useSavedViews;
