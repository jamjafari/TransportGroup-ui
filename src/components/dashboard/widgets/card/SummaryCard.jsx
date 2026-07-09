import React from 'react';

import BaseCard from '../../common/cards/BaseCard';

const SummaryCard = (props) => {
  return <BaseCard {...props} />;
};

export default React.memo(SummaryCard);
