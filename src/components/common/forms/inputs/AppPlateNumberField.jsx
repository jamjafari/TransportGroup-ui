import React, { memo, useEffect, useRef, useState } from 'react';

import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';

const PLATE_LETTERS = [
  'الف',
  'ب',
  'پ',
  'ت',
  'ث',
  'ج',
  'د',
  'ز',
  'س',
  'ش',
  'ص',
  'ط',
  'ع',
  'ف',
  'ق',
  'ک',
  'گ',
  'ل',
  'م',
  'ن',
  'و',
  'ه',
  'ی',
];

const parsePlate = (value) => {
  const match = /^(\d{2})([^\d]+)(\d{3})-(\d{2})$/.exec(value || '');

  if (!match) {
    return { part1: '', letter: '', part2: '', part3: '' };
  }

  const [, part1, letter, part2, part3] = match;
  return { part1, letter, part2, part3 };
};

// حالا هر مقداری که موجوده رو برمی‌گردونه، حتی ناقص — نه فقط وقتی کامل شد
const buildPlate = ({ part1, letter, part2, part3 }) => {
  if (!part1 && !letter && !part2 && !part3) return '';

  const tail = part3 ? `-${part3}` : '';
  return `${part1 || ''}${letter || ''}${part2 || ''}${tail}`;
};

const AppPlateNumberField = ({
  label,
  value,
  onChange,
  error,
  helperText,
  disabled,
  required,
}) => {
  const [parts, setParts] = useState(() => parsePlate(value));
  const lastEmitted = useRef(value);

  // فقط وقتی مقدار از بیرون تغییر کرده (مثلاً موقع لود فرم ادیت)، state داخلی رو sync کن
  useEffect(() => {
    if (value !== lastEmitted.current) {
      setParts(parsePlate(value));
      lastEmitted.current = value;
    }
  }, [value]);

  const updatePart = (key, newValue) => {
    const next = { ...parts, [key]: newValue };
    setParts(next);

    const built = buildPlate(next);
    lastEmitted.current = built;
    onChange?.(built);
  };

  const numericHandler = (key, maxLength) => (event) => {
    const digitsOnly = event.target.value
      .replace(/\D/g, '')
      .slice(0, maxLength);
    updatePart(key, digitsOnly);
  };

  return (
    <Box>
      {label && (
        <Typography variant="body2" fontWeight={600} mb={0.5}>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </Typography>
      )}

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          direction: 'ltr',
          justifyContent: 'flex-start',
        }}
      >
        <TextField
          size="small"
          value={parts.part1}
          onChange={numericHandler('part1', 2)}
          placeholder="۱۲"
          disabled={disabled}
          error={error}
          inputProps={{
            maxLength: 2,
            style: { textAlign: 'center', width: 40 },
          }}
        />

        <Select
          size="small"
          value={parts.letter}
          onChange={(e) => updatePart('letter', e.target.value)}
          disabled={disabled}
          error={error}
          displayEmpty
          sx={{ width: 70 }}
        >
          <MenuItem value="">
            <em>حرف</em>
          </MenuItem>
          {PLATE_LETTERS.map((l) => (
            <MenuItem key={l} value={l}>
              {l}
            </MenuItem>
          ))}
        </Select>

        <TextField
          size="small"
          value={parts.part2}
          onChange={numericHandler('part2', 3)}
          placeholder="۳۴۵"
          disabled={disabled}
          error={error}
          inputProps={{
            maxLength: 3,
            style: { textAlign: 'center', width: 55 },
          }}
        />

        <Typography variant="body2" color="text.secondary">
          ایران
        </Typography>

        <TextField
          size="small"
          value={parts.part3}
          onChange={numericHandler('part3', 2)}
          placeholder="۶۷"
          disabled={disabled}
          error={error}
          inputProps={{
            maxLength: 2,
            style: { textAlign: 'center', width: 40 },
          }}
        />
      </Box>

      {helperText && (
        <Typography
          variant="caption"
          color={error ? 'error' : 'text.secondary'}
          display="block"
          mt={0.5}
        >
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

export default memo(AppPlateNumberField);
