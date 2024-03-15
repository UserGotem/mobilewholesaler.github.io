'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';

// MATERIAL - UI
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';

// ==============================|| TAB PANEL ||============================== //

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

// ==============================|| TABS - BASIC ||============================== //

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const basicTabCodeString = `// BasicTabs.tsx
<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
  <Tab
    label="Tab1"
    icon={<Chip label="99" color="primary" variant="light" size="small" />}
    iconPosition="end"
    {...a11yProps(0)}
  />
  <Tab label="Tab2" icon={<Chip label="9" variant="light" size="small" />} iconPosition="end" {...a11yProps(1)} />
  <Tab label="Tab3" {...a11yProps(2)} />
</Tabs>
<TabPanel value={value} index={0}>
  <Typography variant="h6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
    purus sem, sagittis eu mauris et, viverra lobortis urna.
  </Typography>
</TabPanel>
<TabPanel value={value} index={1}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>
<TabPanel value={value} index={2}>
  <Typography variant="h6">
    Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
    cursus in nec est.
  </Typography>
</TabPanel>`;

  return (
    <MainCard codeString={basicTabCodeString}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab
              label="Tab1"
              icon={<Chip label="99" color="primary" variant="light" size="small" />}
              iconPosition="end"
              {...a11yProps(0)}
            />
            <Tab label="Tab2" icon={<Chip label="9" variant="light" size="small" />} iconPosition="end" {...a11yProps(1)} />
            <Tab label="Tab3" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
            purus sem, sagittis eu mauris et, viverra lobortis urna.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h6">
            Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
            semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h6">
            Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
            cursus in nec est.
          </Typography>
        </TabPanel>
      </Box>
    </MainCard>
  );
}
