import React, { memo } from 'react';

import { TableBody, TableRow, TableCell, Typography, Box } from '@mui/material';

import Stack from '@mui/material/Stack';

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';

import { GridEmptyPropTypes } from './GridEmpty.types';

const GridEmpty = ({
  colSpan = 1,

  title = 'No Data',

  description = 'There are no records to display.',

  icon,

  action,
}) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell
          colSpan={colSpan}

          align="center"

          sx={{
            py: 8,
          }}
        >
          <Stack
            spacing={2}

            alignItems="center"

            justifyContent="center"
          >
            <Box
              sx={{
                color: 'text.secondary',
              }}
            >
              {icon ?? (
                <InboxOutlinedIcon
                  sx={{
                    fontSize: 64,
                  }}
                />
              )}
            </Box>

            <Typography
              variant="h6"

              fontWeight={600}
            >
              {title}
            </Typography>

            <Typography
              variant="body2"

              color="text.secondary"
            >
              {description}
            </Typography>

            {action}
          </Stack>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

GridEmpty.propTypes = GridEmptyPropTypes;

export default memo(GridEmpty);
