import React from 'react';

import { BaseCard } from '@/components/common/cards/BaseCard';

const SummaryCard = (props) => {
  return <BaseCard {...props} />;
};

export default React.memo(SummaryCard);
