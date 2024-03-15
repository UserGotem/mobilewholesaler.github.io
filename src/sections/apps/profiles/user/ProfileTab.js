import { useEffect, useState } from 'react';

// NEXT
import { usePathname, useRouter } from 'next/navigation';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';

// ASSETS
import { CardCoin, Lock, Profile, Setting3 } from 'iconsax-react';

function getPathIndex(pathname) {
  let selectedTab = 0;
  switch (pathname) {
    case '/apps/profiles/user/payment':
      selectedTab = 1;
      break;
    case '/apps/profiles/user/password':
      selectedTab = 2;
      break;
    case '/apps/profiles/user/settings':
      selectedTab = 3;
      break;
    case '/apps/profiles/user/personal':
    default:
      selectedTab = 0;
  }
  return selectedTab;
}

// ==============================|| USER PROFILE - BASIC ||============================== //

const ProfileTab = () => {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedIndex, setSelectedIndex] = useState(getPathIndex(pathname || '/'));
  const handleListItemClick = (index, route) => {
    setSelectedIndex(index);
    router.push(route);
  };

  useEffect(() => {
    setSelectedIndex(getPathIndex(pathname || '/'));
  }, [pathname]);

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32, color: theme.palette.secondary.main } }}>
      <ListItemButton selected={selectedIndex === 0} onClick={() => handleListItemClick(0, '/apps/profiles/user/personal')}>
        <ListItemIcon>
          <Profile size={18} />
        </ListItemIcon>
        <ListItemText primary="Personal Information" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 1} onClick={() => handleListItemClick(1, '/apps/profiles/user/payment')}>
        <ListItemIcon>
          <CardCoin size={18} />
        </ListItemIcon>
        <ListItemText primary="Payment" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 2} onClick={() => handleListItemClick(2, '/apps/profiles/user/password')}>
        <ListItemIcon>
          <Lock size={18} />
        </ListItemIcon>
        <ListItemText primary="Change Password" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 3} onClick={() => handleListItemClick(3, '/apps/profiles/user/settings')}>
        <ListItemIcon>
          <Setting3 size={18} />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </List>
  );
};

export default ProfileTab;
