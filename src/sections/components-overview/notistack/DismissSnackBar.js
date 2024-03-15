// MATERIAL - UI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// THIRD - PARTY
import { useSnackbar, enqueueSnackbar } from 'notistack';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';

// ==============================|| NOTISTACK - DISMISS ||============================== //

export default function DismissSnackBar() {
  const { closeSnackbar } = useSnackbar();

  const NotiStackDismissSnackBarCodeString = `<Button variant="outlined" 
  onClick={() => enqueueSnackbar('No connection!', { variant: 'error',persist: true, anchorOrigin: { horizontal: 'center', vertical: 'bottom' }})}>
  Back Online
</Button>
<Button variant="outlined" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => closeSnackbar()}>
    Back Online
</Button>`;

  return (
    <MainCard title="Dismiss Programmatically" codeString={NotiStackDismissSnackBarCodeString}>
      <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <Button
          variant="outlined"
          fullWidth
          color="error"
          sx={{ marginBlockStart: 2, marginInlineEnd: 2 }}
          onClick={() =>
            enqueueSnackbar('No connection!', {
              variant: 'error',
              persist: true,
              anchorOrigin: { horizontal: 'center', vertical: 'bottom' }
            })
          }
        >
          Simulate connection loss
        </Button>
        <Button variant="outlined" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => closeSnackbar()}>
          Back Online
        </Button>
      </Stack>
    </MainCard>
  );
}
