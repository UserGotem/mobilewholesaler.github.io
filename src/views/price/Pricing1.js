'use client';

import { useState, Fragment } from 'react';

// MATERIAL - UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';

// PLAN LIST
const plans = [
  {
    active: false,
    title: 'Basic',
    description: '03 Services',
    price: 69,
    permission: [0, 1, 2]
  },
  {
    active: true,
    title: 'Standard',
    description: '05 Services',
    price: 129,
    permission: [0, 1, 2, 3, 4]
  },
  {
    active: false,
    title: 'Premium',
    description: '08 Services',
    price: 599,
    permission: [0, 1, 2, 3, 4, 5, 6, 7]
  }
];

const planList = [
  'One End Product', // 0
  'No attribution required', // 1
  'TypeScript', // 2
  'Figma Design Resources', // 3
  'Create Multiple Products', // 4
  'Create a SaaS Project', // 5
  'Resale Product', // 6
  'Separate sale of our UI Elements?' // 7
];

// ==============================|| PRICING ||============================== //

const Pricing1Page = () => {
  const [timePeriod, setTimePeriod] = useState(true);

  const priceListDisable = {
    opacity: 0.4,
    textDecoration: 'line-through'
  };

  const priceActivePlan = {
    padding: 3,
    borderRadius: 1,
    bgcolor: 'primary.lighter'
  };
  const price = {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: 1
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
          <Stack spacing={0}>
            <Typography variant="h5">Quality is never an accident. It is always the result of interlligent effort</Typography>
            <Typography color="textSecondary">It makes no difference what the price is, it all makes senses to us.</Typography>
          </Stack>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Typography variant="subtitle1" color={timePeriod ? 'textSecondary' : 'textPrimary'}>
              Billed Yearly
            </Typography>
            <Switch checked={timePeriod} onChange={() => setTimePeriod(!timePeriod)} inputProps={{ 'aria-label': 'container' }} />
            <Typography variant="subtitle1" color={timePeriod ? 'textPrimary' : 'textSecondary'}>
              Billed Monthly
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item container spacing={3} xs={12} alignItems="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MainCard>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box sx={plan.active ? priceActivePlan : { padding: 3 }}>
                    <Grid container spacing={3}>
                      {plan.active && (
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                          <Chip label="Popular" color="success" />
                        </Grid>
                      )}
                      <Grid item xs={12}>
                        <Stack spacing={0} textAlign="center">
                          <Typography variant="h4">{plan.title}</Typography>
                          <Typography>{plan.description}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <Stack spacing={0} alignItems="center">
                          {timePeriod && (
                            <Typography variant="h2" sx={price}>
                              ${plan.price}
                            </Typography>
                          )}
                          {!timePeriod && (
                            <Typography variant="h2" sx={price}>
                              ${plan.price * 12 - 99}
                            </Typography>
                          )}
                          <Typography variant="h6" color="textSecondary">
                            Lifetime
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <Button color={plan.active ? 'primary' : 'secondary'} variant={plan.active ? 'contained' : 'outlined'} fullWidth>
                          Order Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <List sx={{ m: 0, p: 0, '&> li': { px: 0, py: 0.625 } }} component="ul">
                    {planList.map((list, i) => (
                      <Fragment key={i}>
                        <ListItem sx={!plan.permission.includes(i) ? priceListDisable : {}}>
                          <ListItemText primary={list} sx={{ textAlign: 'center' }} />
                        </ListItem>
                      </Fragment>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Pricing1Page;
