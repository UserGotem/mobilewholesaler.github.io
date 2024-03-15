'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';

// MATERIAL - UI
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';

// ASSETS
import { Book, Image as ImageIcon, Profile, Profile2User } from 'iconsax-react';

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

// ==============================|| TABS - ICON ||============================== //

export default function IconTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const iconTabCodeString = `// IconTabs.tsx
<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
  <Tab label="Profile" icon={<Profile />} iconPosition="start" {...a11yProps(0)} />
  <Tab label="Followers" icon={<Book />} iconPosition="start" {...a11yProps(1)} />
  <Tab label="Friends" icon={<Profile2User />} iconPosition="start" {...a11yProps(2)} />
  <Tab label="Gallery" icon={<ImageIcon />} iconPosition="start" {...a11yProps(3)} />
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
</TabPanel>
<TabPanel value={value} index={3}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>`;

  return (
    <MainCard codeString={iconTabCodeString}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Profile" icon={<Profile />} iconPosition="start" {...a11yProps(0)} />
            <Tab label="Followers" icon={<Book />} iconPosition="start" {...a11yProps(1)} />
            <Tab label="Friends" icon={<Profile2User />} iconPosition="start" {...a11yProps(2)} />
            <Tab label="Gallery" icon={<ImageIcon />} iconPosition="start" {...a11yProps(3)} />
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
        <TabPanel value={value} index={3}>
          <Typography variant="h6">
            Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
            semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
          </Typography>
        </TabPanel>
      </Box>
    </MainCard>
  );
}
