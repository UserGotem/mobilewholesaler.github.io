import PropTypes from 'prop-types';
import { useState } from 'react';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// THIRD - PARTY
import { Chance } from 'chance';

// PROJECT IMPORTS
import IconButton from 'components/@extended/IconButton';
import { addItemComment } from 'api/kanban';
import { openSnackbar } from 'api/snackbar';

// ASSETS
import { Android, Camera, DocumentUpload } from 'iconsax-react';

const chance = new Chance();

// ==============================|| KANBAN BOARD - ADD ITEM COMMENT ||============================== //

const AddItemComment = ({ itemId }) => {
  const theme = useTheme();

  const [comment, setComment] = useState('');
  const [isComment, setIsComment] = useState(false);

  const handleAddTaskComment = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      addTaskComment();
    }
  };

  const addTaskComment = () => {
    if (comment.length > 0) {
      const newComment = {
        id: `${chance.integer({ min: 1000, max: 9999 })}`,
        comment,
        profileId: 'profile-3'
      };

      addItemComment(itemId, newComment);
      openSnackbar({
        open: true,
        message: 'Comment Added successfully',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        variant: 'alert',
        alert: {
          color: 'success'
        }
      });
      setComment('');
    } else {
      setIsComment(true);
    }
  };

  const handleTaskComment = (event) => {
    const newComment = event.target.value;
    setComment(newComment);
    if (newComment.length <= 0) {
      setIsComment(true);
    } else {
      setIsComment(false);
    }
  };

  return (
    <Box sx={{ p: 2, pb: 1.5, border: `1px solid ${theme.palette.divider}` }}>
      <Grid container alignItems="center" spacing={0.5}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            placeholder="Add Comment"
            value={comment}
            onChange={handleTaskComment}
            sx={{
              mb: 3,
              '& input': { bgcolor: 'transparent', p: 0, borderRadius: '0px' },
              '& fieldset': { display: 'none' },
              '& .MuiFormHelperText-root': {
                ml: 0
              },
              '& .MuiOutlinedInput-root': {
                bgcolor: 'transparent',
                '&.Mui-focused': {
                  boxShadow: 'none'
                }
              }
            }}
            onKeyUp={handleAddTaskComment}
            helperText={isComment ? 'Comment is required.' : ''}
            error={isComment}
          />
        </Grid>
        <Grid item>
          <IconButton>
            <Camera />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <DocumentUpload />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <Android />
          </IconButton>
        </Grid>
        <Grid item xs zeroMinWidth />
        <Grid item>
          <Button size="small" variant="contained" color="primary" onClick={addTaskComment}>
            Comment
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

AddItemComment.propTypes = {
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export default AddItemComment;
