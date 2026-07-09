import React, { memo, useState } from 'react';

import { Box, Tabs, Tab } from '@mui/material';

import LayoutEngine from './LayoutEngine';

const TabsLayout = ({ node }) => {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <Tabs value={value} onChange={(_, v) => setValue(v)} sx={{ mb: 3 }}>
        {node.tabs?.map((tab, index) => (
          <Tab key={index} label={tab.title} />
        ))}
      </Tabs>

      {node.tabs?.[value]?.children?.map((child, index) => (
        <LayoutEngine key={child.id ?? child.name ?? index} node={child} />
      ))}
    </Box>
  );
};

export default memo(TabsLayout);
