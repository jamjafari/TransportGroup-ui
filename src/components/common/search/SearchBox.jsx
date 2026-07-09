import React, { memo, useEffect, useState } from 'react';

import { InputAdornment, IconButton } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import ClearIcon from '@mui/icons-material/Clear';

import { AppTextField } from '../../inputs';

import { SearchBoxPropTypes } from './SearchBox.types';

const SearchBox = ({
  value = '',

  onChange,

  placeholder = 'Search...',

  debounce = 500,

  loading = false,

  fullWidth = true,

  autoFocus = false,
}) => {
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value);
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange?.(text);
    }, debounce);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <AppTextField
      value={text}

      fullWidth={fullWidth}

      autoFocus={autoFocus}

      loading={loading}

      placeholder={placeholder}

      onChange={(e) => setText(e.target.value)}

      startIcon={<SearchIcon />}

      endIcon={
        text && (
          <IconButton
            size="small"

            onClick={() => setText('')}
          >
            <ClearIcon />
          </IconButton>
        )
      }
    />
  );
};

SearchBox.propTypes = SearchBoxPropTypes;

export default memo(SearchBox);
