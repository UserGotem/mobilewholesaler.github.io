import { useState } from 'react';

// MATERIAL - UI
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import { openSnackbar } from 'api/snackbar';
import { isNumber, isLowercaseChar, isUppercaseChar, isSpecialChar, minLength } from 'utils/password-validation';

// THIRD - PARTY
import * as Yup from 'yup';
import { Formik } from 'formik';

// ASSETS
import { Eye, EyeSlash, Minus, TickCircle } from 'iconsax-react';

// ==============================|| USER PROFILE - PASSWORD CHANGE ||============================== //

const TabPassword = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };
  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <MainCard title="Change Password">
      <Formik
        initialValues={{
          old: '',
          password: '',
          confirm: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          old: Yup.string().required('Old Password is required'),
          password: Yup.string()
            .required('New Password is required')
            .matches(
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
              'Password must contain at least 8 characters, one uppercase, one number and one special case character'
            ),
          confirm: Yup.string()
            .required('Confirm Password is required')
            .test('confirm', `Passwords don't match.`, (confirm, yup) => yup.parent.password === confirm)
        })}
        onSubmit={async (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
          try {
            openSnackbar({
              open: true,
              message: 'Password changed successfully.',
              variant: 'alert',
              alert: {
                color: 'success'
              }
            });

            resetForm();
            setStatus({ success: false });
            setSubmitting(false);
          } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item container spacing={3} xs={12} sm={6}>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="password-old">Old Password</InputLabel>
                    <OutlinedInput
                      placeholder="Enter Old Password"
                      id="password-old"
                      type={showOldPassword ? 'text' : 'password'}
                      value={values.old}
                      name="old"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowOldPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="large"
                            color="secondary"
                          >
                            {showOldPassword ? <Eye /> : <EyeSlash />}
                          </IconButton>
                        </InputAdornment>
                      }
                      autoComplete="password-old"
                    />
                    {touched.old && errors.old && (
                      <FormHelperText error id="password-old-helper">
                        {errors.old}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="password-password">New Password</InputLabel>
                    <OutlinedInput
                      placeholder="Enter New Password"
                      id="password-password"
                      type={showNewPassword ? 'text' : 'password'}
                      value={values.password}
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowNewPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="large"
                            color="secondary"
                          >
                            {showNewPassword ? <Eye /> : <EyeSlash />}
                          </IconButton>
                        </InputAdornment>
                      }
                      autoComplete="password-password"
                    />
                    {touched.password && errors.password && (
                      <FormHelperText error id="password-password-helper">
                        {errors.password}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="password-confirm">Confirm Password</InputLabel>
                    <OutlinedInput
                      placeholder="Enter Confirm Password"
                      id="password-confirm"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={values.confirm}
                      name="confirm"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="large"
                            color="secondary"
                          >
                            {showConfirmPassword ? <Eye /> : <EyeSlash />}
                          </IconButton>
                        </InputAdornment>
                      }
                      autoComplete="password-confirm"
                    />
                    {touched.confirm && errors.confirm && (
                      <FormHelperText error id="password-confirm-helper">
                        {errors.confirm}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: { xs: 0, sm: 2, md: 4, lg: 5 } }}>
                  <Typography variant="h5">New password must contain:</Typography>
                  <List sx={{ p: 0, mt: 1 }}>
                    <ListItem divider>
                      <ListItemIcon sx={{ color: minLength(values.password) ? 'success.main' : 'inherit' }}>
                        {minLength(values.password) ? <TickCircle /> : <Minus />}
                      </ListItemIcon>
                      <ListItemText primary="At least 8 characters" />
                    </ListItem>
                    <ListItem divider>
                      <ListItemIcon sx={{ color: isLowercaseChar(values.password) ? 'success.main' : 'inherit' }}>
                        {isLowercaseChar(values.password) ? <TickCircle /> : <Minus />}
                      </ListItemIcon>
                      <ListItemText primary="At least 1 lower letter (a-z)" />
                    </ListItem>
                    <ListItem divider>
                      <ListItemIcon sx={{ color: isUppercaseChar(values.password) ? 'success.main' : 'inherit' }}>
                        {isUppercaseChar(values.password) ? <TickCircle /> : <Minus />}
                      </ListItemIcon>
                      <ListItemText primary="At least 1 uppercase letter (A-Z)" />
                    </ListItem>
                    <ListItem divider>
                      <ListItemIcon sx={{ color: isNumber(values.password) ? 'success.main' : 'inherit' }}>
                        {isNumber(values.password) ? <TickCircle /> : <Minus />}
                      </ListItemIcon>
                      <ListItemText primary="At least 1 number (0-9)" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ color: isSpecialChar(values.password) ? 'success.main' : 'inherit' }}>
                        {isSpecialChar(values.password) ? <TickCircle /> : <Minus />}
                      </ListItemIcon>
                      <ListItemText primary="At least 1 special characters" />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
                  <Button variant="outlined" color="secondary">
                    Cancel
                  </Button>
                  <Button disabled={isSubmitting || Object.keys(errors).length !== 0} type="submit" variant="contained">
                    Save
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </MainCard>
  );
};

export default TabPassword;
