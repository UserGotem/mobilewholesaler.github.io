'use client';

// MATERIAL - UI
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
import { openSnackbar } from 'api/snackbar';

// THIRD - PARTY
import { useFormik } from 'formik';
import * as yup from 'yup';

/**
 * 'Select your favorite color'
 * yup.string Expected 0 arguments, but got 1 */
const validationSchema = yup.object({
  color: yup.string().required('Color selection is required')
});

// ==============================|| FORM VALIDATION - RADIO GROUP  ||============================== //

const RadioGroupForms = () => {
  const formik = useFormik({
    initialValues: {
      color: ''
    },
    validationSchema,
    onSubmit: () => {
      openSnackbar({
        open: true,
        message: 'Radio - Submit Success',
        variant: 'alert',
        alert: {
          color: 'success'
        }
      });
    }
  });

  return (
    <MainCard title="Radio">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item>
            <FormControl>
              <RadioGroup row aria-label="color" value={formik.values.color} onChange={formik.handleChange} name="color" id="color">
                <FormControlLabel value="primary" control={<Radio />} label="Primary" />
                <FormControlLabel value="error" control={<Radio color="error" />} label="Error" />
                <FormControlLabel value="secondary" control={<Radio color="secondary" />} label="Secondary" />
              </RadioGroup>
            </FormControl>
            {formik.errors.color && (
              <FormHelperText error id="standard-weight-helper-text-email-login">
                {' '}
                {formik.errors.color}{' '}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
};

export default RadioGroupForms;
