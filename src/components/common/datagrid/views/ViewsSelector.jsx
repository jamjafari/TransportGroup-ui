import React, { useState } from 'react';

import { Box, MenuItem, Select, Button } from '@mui/material';

const ViewsSelector = ({ views, activeView, onSave, onLoad, onDelete }) => {
  const [name, setName] = useState('');

  return (
    <Box display="flex" gap={1}>
      <Select
        size="small"
        value={activeView || ''}
        onChange={(e) => {
          const view = views.find((v) => v.id === e.target.value);

          if (view) {
            onLoad(view);
          }
        }}
      >
        {views.map((view) => (
          <MenuItem key={view.id} value={view.id}>
            {view.name}
          </MenuItem>
        ))}
      </Select>

      <input
        placeholder="Save view..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button
        size="small"
        onClick={() => {
          if (name) {
            onSave(name, {});

            setName('');
          }
        }}
      >
        Save
      </Button>
    </Box>
  );
};
export default ViewsSelector;
