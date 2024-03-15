import PropTypes from 'prop-types';
import { useState } from 'react';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// THIRD - PARTY
import { Draggable } from '@hello-pangea/dnd';

// PROJECT IMPORTS
import EditStory from '../Backlogs/EditStory';
import AlertItemDelete from './AlertItemDelete';
import IconButton from 'components/@extended/IconButton';
import MoreIcon from 'components/@extended/MoreIcon';
import { deleteItem, handlerKanbanDialog, useGetBacklogs } from 'api/kanban';
import { openSnackbar } from 'api/snackbar';

// ASSETS
import { Hierarchy } from 'iconsax-react';

const backImage = '/assets/images/profile';

// item drag wrapper
const getDragWrapper = (isDragging, draggableStyle, theme, radius) => {
  const bgcolor = theme.palette.background.paper + 99;
  return {
    userSelect: 'none',
    margin: `0 0 ${8}px 0`,
    padding: 16,
    border: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor: isDragging ? bgcolor : theme.palette.background.paper,
    borderRadius: radius,
    ...draggableStyle
  };
};

// ==============================|| KANBAN BOARD - ITEMS ||============================== //

const Items = ({ item, index }) => {
  const theme = useTheme();
  const backProfile = item.image && `${backImage}/${item.image}`;

  const { backlogs: lists } = useGetBacklogs();
  const itemStory = lists?.userStory.filter((story) => story?.itemIds?.filter((itemId) => itemId === item.id)[0])[0];
  const handlerDetails = (id) => {
    handlerKanbanDialog(id);
  };

  const [anchorEl, setAnchorEl] = useState();
  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = useState(false);
  const handleModalClose = (status) => {
    setOpen(false);
    if (status) {
      deleteItem(item.id);
      openSnackbar({
        open: true,
        message: 'Task Deleted successfully',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        variant: 'alert',
        alert: {
          color: 'success'
        }
      });
    }
  };

  const [openStoryDrawer, setOpenStoryDrawer] = useState(false);
  const handleStoryDrawerOpen = () => {
    setOpenStoryDrawer((prevState) => !prevState);
  };

  const editStory = () => {
    setOpenStoryDrawer((prevState) => !prevState);
  };

  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getDragWrapper(snapshot.isDragging, provided.draggableProps.style, theme, `12px`)}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: itemStory ? -0.75 : 0 }}>
            <Typography
              onClick={() => handlerDetails(item.id)}
              variant="subtitle1"
              sx={{
                display: 'inline-block',
                width: 'calc(100% - 34px)',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                verticalAlign: 'middle',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              {item.title}
            </Typography>

            <IconButton size="small" color="secondary" onClick={handleClick} aria-controls="menu-comment" aria-haspopup="true">
              <MoreIcon />
            </IconButton>
            <Menu
              id="menu-comment"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              variant="selectedMenu"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  handlerDetails(item.id);
                }}
              >
                Edit
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setOpen(true);
                }}
              >
                Delete
              </MenuItem>
            </Menu>
            <AlertItemDelete title={item.title} open={open} handleClose={handleModalClose} />
          </Stack>
          {itemStory && (
            <>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Tooltip title="User Story">
                  <Hierarchy size={16} style={{ color: theme.palette.primary.dark }} />
                </Tooltip>
                <Tooltip title={itemStory.title}>
                  <Link variant="caption" color="primary.dark" underline="hover" onClick={editStory} sx={{ cursor: 'pointer', pt: 0.5 }}>
                    User Story #{itemStory.id}
                  </Link>
                </Tooltip>
              </Stack>
              <EditStory story={itemStory} open={openStoryDrawer} handleDrawerOpen={handleStoryDrawerOpen} />
            </>
          )}
          {backProfile && (
            <CardMedia component="img" image={backProfile} sx={{ width: '100%', borderRadius: 1.5, mt: 1.5 }} title="Slider5 image" />
          )}
        </div>
      )}
    </Draggable>
  );
};

Items.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object
};

export default Items;
