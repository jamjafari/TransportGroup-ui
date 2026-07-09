import React, { memo } from 'react';

import { Box, Tabs, Tab } from '@mui/material';

import { AppTabsPropTypes, AppTabsDefaultProps } from './AppTabs.types';

const AppTabs = ({
  value,
  tabs,
  onChange,
  variant,
  centered,
  scrollButtons,
  sx,
}) => {
  return (
    <Box sx={sx}>
      <Tabs
        value={value}

        onChange={(_, newValue) => onChange(newValue)}

        variant={variant}

        centered={centered}

        scrollButtons={scrollButtons}

        allowScrollButtonsMobile
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}

            value={tab.value}

            label={tab.label}

            icon={tab.icon}

            iconPosition={tab.icon ? 'start' : undefined}

            disabled={tab.disabled}
          />
        ))}
      </Tabs>
    </Box>
  );
};

AppTabs.propTypes = AppTabsPropTypes;

AppTabs.defaultProps = AppTabsDefaultProps;

export default memo(AppTabs);
