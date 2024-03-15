import PropTypes from 'prop-types';

// MATERIAL - UI
import Badge from '@mui/material/Badge';

// PROJECT IMPORTS
import AvatarStatus from './AvatarStatus';
import Avatar from 'components/@extended/Avatar';

// ASSETS
const avatarImage = '/assets/images/users';

// ==============================|| CHAT - USER AVATAR WITH STATUS ICON ||============================== //

const UserAvatar = ({ user }) => (
  <Badge
    overlap="circular"
    badgeContent={<AvatarStatus status={user.online_status} />}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    sx={{ '& .MuiBox-root': { width: 6, height: 6 }, padding: 0, minWidth: 12, '& svg': { background: '#fff', borderRadius: '50%' } }}
  >
    <Avatar alt={user.name} src={user.avatar && `${avatarImage}/${user.avatar}`} />
  </Badge>
);

UserAvatar.propTypes = {
  user: PropTypes.object
};

export default UserAvatar;
