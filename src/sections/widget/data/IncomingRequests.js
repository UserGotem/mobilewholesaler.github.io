// NEXT
import Link from 'next/link';

// MATERIAL - UI
import List from '@mui/material/List';
import Links from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';
import SimpleBar from 'components/third-party/SimpleBar';
import Dot from 'components/@extended/Dot';

// =========================|| DATA WIDGET - INCOMING REQUESTS ||========================= //

const IncomingRequests = () => (
  <MainCard
    title="Incoming Requests"
    content={false}
    secondary={
      <Links component={Link} href="#" color="primary">
        View all
      </Links>
    }
  >
    <SimpleBar sx={{ height: 334 }}>
      <List
        disablePadding
        component="nav"
        aria-label="main mailbox folders"
        sx={{ '& .MuiListItemButton-root': { borderRadius: 0, my: 0, py: 1.5 }, '& .MuiListItemText-root': { color: 'text.primary' } }}
      >
        <ListItemButton>
          <ListItemIcon>
            <Dot color="success" size={10} />
          </ListItemIcon>
          <ListItemText primary="Incoming requests" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <Dot color="error" size={10} />
          </ListItemIcon>
          <ListItemText primary="You have 2 pending requests.." />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <Dot color="warning" size={10} />
          </ListItemIcon>
          <ListItemText primary="You have 3 pending tasks" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <Dot size={10} />
          </ListItemIcon>
          <ListItemText primary="New order received" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <Dot color="success" size={10} />
          </ListItemIcon>
          <ListItemText primary="Incoming requests" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <Dot size={10} />
          </ListItemIcon>
          <ListItemText primary="You have 2 pending requests.." />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <Dot color="warning" size={10} />
          </ListItemIcon>
          <ListItemText primary="You have 3 pending tasks" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <Dot color="error" size={10} />
          </ListItemIcon>
          <ListItemText primary="New order received" />
        </ListItemButton>
      </List>
    </SimpleBar>
  </MainCard>
);

export default IncomingRequests;
