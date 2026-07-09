export const WIDGET_TYPES = {
  CHART: 'chart',

  TABLE: 'table',

  STAT: 'stat',

  CARD: 'card',
};

export const createWidget = ({ id, type, title, dataSource, config = {} }) => {
  return {
    id,

    type,

    title,

    dataSource,

    config,

    createdAt: new Date().toISOString(),
  };
};
