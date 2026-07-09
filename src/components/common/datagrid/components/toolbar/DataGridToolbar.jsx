import React from 'react';

import { Box } from '@mui/material';

import ToolbarSearch from './toolbarSearch';

import ToolbarFilters from './toolbarFilters';

import ToolbarActions from './toolbarActions';

import ViewsSelector from './views/ViewsSelector';

const DataGridToolbar = ({
  search,
  onSearch,
  clearSearch,

  filters,
  columns,
  onFilterChange,

  selectedCount,
  clearSelection,

  onExport,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <Box display="flex" gap={2}>
        <ToolbarSearch
          value={search}
          onChange={onSearch}
          onClear={clearSearch}
        />

        <ToolbarFilters
          filters={filters}
          columns={columns}
          onChange={onFilterChange}
        />
      </Box>

      <ToolbarActions
        selectedCount={selectedCount}
        onClearSelection={clearSelection}
        onExport={onExport}
      />
      <ViewsSelector
        views={views}
        activeView={activeView}
        onSave={onSaveView}
        onLoad={onLoadView}
        onDelete={onDeleteView}
      />
    </Box>
  );
};

export default DataGridToolbar;
