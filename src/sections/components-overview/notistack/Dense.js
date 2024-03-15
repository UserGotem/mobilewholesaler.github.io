import { useState } from 'react';

// MATERIAL - UI
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

// THIRD - PARTY
import { enqueueSnackbar } from 'notistack';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';
import { handlerDense } from 'api/snackbar';

// ==============================|| NOTISTACK - DENSE ||============================== //

export default function Dense() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    handlerDense(event.target.checked);
  };

  const NotistackDenseCodeString = `<Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
Dense margins
<Button variant="outlined" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => enqueueSnackbar('Your notification here')}>
  Show snackbar
</Button>`;

  return (
    <MainCard title="Dense" codeString={NotistackDenseCodeString}>
      <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
      Dense margins
      <Button variant="outlined" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => enqueueSnackbar('Your notification here')}>
        Show snackbar
      </Button>
    </MainCard>
  );
}
