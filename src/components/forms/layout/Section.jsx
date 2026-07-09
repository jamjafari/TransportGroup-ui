import React, { memo } from 'react';

import { Box, Divider, Typography } from '@mui/material';

import LayoutEngine from './LayoutEngine';

const Section = ({ node }) => {
  return (
    <Box mb={5}>
      {node.title && (
        <>
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              fontWeight: 700,
            }}
          >
            {node.title}
          </Typography>

          <Divider sx={{ mb: 3 }} />
        </>
      )}

      {node.children?.map((child, index) => (
        <LayoutEngine key={child.id ?? child.name ?? index} node={child} />
      ))}
    </Box>
  );
};

export default memo(Section);
