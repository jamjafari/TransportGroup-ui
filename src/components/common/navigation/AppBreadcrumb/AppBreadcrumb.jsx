import React, { memo } from 'react';

import { Breadcrumbs, Link, Typography } from '@mui/material';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { Link as RouterLink } from 'react-router-dom';

import {
  AppBreadcrumbPropTypes,
  AppBreadcrumbDefaultProps,
} from './AppBreadcrumb.types';

const AppBreadcrumb = ({ items, separator, maxItems }) => {
  return (
    <Breadcrumbs
      separator={separator}
      maxItems={maxItems}
      aria-label="breadcrumb"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (isLast) {
          return (
            <Typography key={item.label} color="text.primary" fontWeight={600}>
              {item.label}
            </Typography>
          );
        }

        return (
          <Link
            key={item.label}
            component={RouterLink}
            underline="hover"
            color="inherit"
            to={item.to}
          >
            {item.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

AppBreadcrumb.propTypes = AppBreadcrumbPropTypes;

AppBreadcrumb.defaultProps = AppBreadcrumbDefaultProps;

export default memo(AppBreadcrumb);
