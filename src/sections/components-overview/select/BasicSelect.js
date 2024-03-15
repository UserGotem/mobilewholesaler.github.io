'use client';

import { useState } from 'react';

// MATERIAL - UI
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';

// ==============================|| SELECT - BASIC ||============================== //

export default function BasicSelect() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const basicSelectCodeString = `<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select Age</InputLabel>
  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} placeholder="Age" onChange={handleChange}>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
<FormControl sx={{ m: 1, minWidth: 120 }}>
  <FormHelperText>Without label</FormHelperText>
  <Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
    <MenuItem value="" sx={{ color: 'text.secondary' }}>
      Select Age
    </MenuItem>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>`;

  return (
    <MainCard title="Basic" codeHighlight codeString={basicSelectCodeString}>
      <Grid container spacing={2.5}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel>Age</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                displayEmpty
                id="demo-simple-select"
                value={age}
                placeholder="Age"
                onChange={handleChange}
              >
                <MenuItem disabled value="" sx={{ color: 'text.secondary' }}>
                  Select Age
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
              <MenuItem disabled value="" sx={{ color: 'text.secondary' }}>
                Without label
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </MainCard>
  );
}
