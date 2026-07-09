import React, { memo } from 'react';

import { Skeleton, TableBody, TableRow, TableCell } from '@mui/material';

import { GridLoadingPropTypes } from './GridLoading.types';

const GridLoading = ({
  columns = 5,

  rows = 8,
}) => {
  return (
    <TableBody>
      {Array.from({
        length: rows,
      }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {Array.from({
            length: columns,
          }).map((_, cellIndex) => (
            <TableCell key={cellIndex}>
              <Skeleton
                variant="text"

                height={32}

                animation="wave"
              />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

GridLoading.propTypes = GridLoadingPropTypes;

export default memo(GridLoading);
