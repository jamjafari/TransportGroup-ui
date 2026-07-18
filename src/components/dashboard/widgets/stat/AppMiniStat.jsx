import React from 'react';

import { Paper, Box, Typography, Skeleton } from '@mui/material';

import { AppStatCardPropTypes, AppStatCardDefaultProps } from './AppStat.types';

const AppMiniStat = ({ title, value, icon, loading }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        borderRadius: 2,

        width: '100%',
      }}
    >
      <Box
        display="flex"
        flexDirection="row-reverse"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="caption" color="text.secondary">
            {title}
          </Typography>

          {loading ? (
            <Skeleton width={45} />
          ) : (
            <Typography variant="h6" fontWeight={600}>
              {value}
            </Typography>
          )}
        </Box>

        {icon && <Box>{icon}</Box>}
      </Box>
    </Paper>
  );
};

AppMiniStat.propTypes = AppStatCardPropTypes;

AppMiniStat.defaultProps = AppStatCardDefaultProps;

export default React.memo(AppMiniStat);
