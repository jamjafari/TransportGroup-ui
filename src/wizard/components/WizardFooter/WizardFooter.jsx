import React, { memo } from 'react';

import { Box, Button } from '@mui/material';

import { useFormContext } from 'react-hook-form';

import useWizard from '../../useWizard';

const WizardFooter = () => {
  const { handleSubmit } = useFormContext();

  const {
    current,

    next,

    previous,

    isFirst,

    isLast,
  } = useWizard();

  const submit = (data) => {
    current?.onSubmit?.(data);

    if (!isLast) {
      next();
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" mt={4}>
      <Button variant="outlined" disabled={isFirst} onClick={previous}>
        Previous
      </Button>

      <Button variant="contained" onClick={handleSubmit(submit)}>
        {isLast ? 'Finish' : 'Next'}
      </Button>
    </Box>
  );
};

export default memo(WizardFooter);
