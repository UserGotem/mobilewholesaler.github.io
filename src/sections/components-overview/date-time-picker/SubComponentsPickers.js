'use client';

import { useState } from 'react';

// MATERIAL - UI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { MonthCalendar } from '@mui/x-date-pickers/MonthCalendar';
import { YearCalendar } from '@mui/x-date-pickers/YearCalendar';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';

const minDate = new Date('2020-01-01T00:00:00.000');
const maxDate = new Date('2034-01-01T00:00:00.000');

// ==============================|| DATE PICKER - SUB COMPONENT ||============================== //

export default function SubComponentsPickers() {
  const [date, setDate] = useState(new Date());

  const subDatepickerCodeString = `<LocalizationProvider dateAdapter={AdapterDateFns}>
  <Stack spacing={3} justifyContent="center" alignItems="center">
    <Box sx={{ maxWidth: 320 }}>
      <YearCalendar value={date} minDate={minDate} maxDate={maxDate} onChange={(newDate: Date) => setDate(newDate)} />
    </Box>
    <Box sx={{ maxWidth: 320 }}>
      <MonthPicker date={date} minDate={minDate} maxDate={maxDate} onChange={(newDate) => setDate(newDate)} sx={{ m: 'auto' }} />
    </Box>
    <Box sx={{ maxWidth: 320 }}>
      <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
    </Box>
  </Stack>
</LocalizationProvider>`;

  return (
    <MainCard title="Sub Component" codeString={subDatepickerCodeString}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3} justifyContent="center" alignItems="center">
          <Box sx={{ maxWidth: 320 }}>
            <YearCalendar value={date} minDate={minDate} maxDate={maxDate} onChange={(newDate) => setDate(newDate)} />
          </Box>
          <Box sx={{ maxWidth: 320 }}>
            <MonthCalendar value={date} minDate={minDate} maxDate={maxDate} onChange={(newDate) => setDate(newDate)} sx={{ m: 'auto' }} />
          </Box>
          <Box sx={{ maxWidth: 320 }}>
            <DateCalendar value={date} onChange={(newDate) => setDate(newDate)} />
          </Box>
        </Stack>
      </LocalizationProvider>
    </MainCard>
  );
}
