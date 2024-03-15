// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';
import { ThemeMode } from 'config';

// ASSETS
import { TickSquare } from 'iconsax-react';

// ==============================|| CUSTOMIZATION - COLOR SCHEME ||============================== //

const ColorScheme = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const { presetColor, onChangePresetColor } = useConfig();

  const colorOptions = [
    {
      id: 'default',
      primary: mode === ThemeMode.DARK ? '#4680FF' : '#4680FF',
      darker: mode === ThemeMode.DARK ? '#2F63FF' : '#2F63FF'
    },
    {
      id: 'theme1',
      primary: mode === ThemeMode.DARK ? '#305bdd' : '#3366FF',
      darker: mode === ThemeMode.DARK ? '#a9c5f8' : '#102693'
    },
    {
      id: 'theme2',
      primary: mode === ThemeMode.DARK ? '#655ac8' : '#7265E6',
      darker: mode === ThemeMode.DARK ? '#c3baf4' : '#5549DB'
    },
    {
      id: 'theme3',
      primary: mode === ThemeMode.DARK ? '#0a7d3e' : '#068e44',
      darker: mode === ThemeMode.DARK ? '#173123' : '#001c0f'
    },
    {
      id: 'theme4',
      primary: mode === ThemeMode.DARK ? '#5d7dcb' : '#3c64d0',
      darker: mode === ThemeMode.DARK ? '#212841' : '#0d1b5e'
    },
    {
      id: 'theme5',
      primary: mode === ThemeMode.DARK ? '#d26415' : '#f27013',
      darker: mode === ThemeMode.DARK ? '#f8c48c' : '#802800'
    },
    {
      id: 'theme6',
      primary: mode === ThemeMode.DARK ? '#288d99' : '#2aa1af',
      darker: mode === ThemeMode.DARK ? '#96d0d0' : '#06323d'
    },
    {
      id: 'theme7',
      primary: mode === ThemeMode.DARK ? '#05934c' : '#00a854',
      darker: mode === ThemeMode.DARK ? '#61ca8b' : '#003620'
    },
    {
      id: 'theme8',
      primary: mode === ThemeMode.DARK ? '#058478' : '#009688',
      darker: mode === ThemeMode.DARK ? '#59b8a5' : '#002424'
    }
  ];

  const handlePresetColorChange = (event) => {
    onChangePresetColor(event.target.value);
  };

  return (
    <RadioGroup row aria-label="payment-card" name="payment-card" value={presetColor} onChange={handlePresetColorChange}>
      <Stack direction="row" alignItems="center" sx={{ width: '100%' }} spacing={0.5}>
        {colorOptions.map((color, index) => (
          <FormControlLabel
            key={index}
            control={<Radio value={color.id} sx={{ display: 'none' }} />}
            sx={{ m: 0, width: presetColor === color.id ? '100%' : 'auto', display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{
                  bgcolor: color.primary,
                  p: 1,
                  borderRadius: 0.5,
                  borderWidth: 4,
                  borderColor: presetColor === color.id ? color.darker : color.primary,
                  '&:hover': { borderColor: color.darker }
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: presetColor === color.id ? '100%' : 1, height: 44 }}
                >
                  {presetColor === color.id && <TickSquare variant="Bulk" color={theme.palette.common.white} />}
                </Stack>
              </MainCard>
            }
          />
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default ColorScheme;
