import PropTypes from 'prop-types';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

// PROJECT IMPORTS
import { editColumn } from 'api/kanban';
import { ThemeMode } from 'config';

// ==============================|| KANBAN BOARD - COLUMN EDIT ||============================== //

const EditColumn = ({ column }) => {
  const theme = useTheme();

  const handleColumnRename = (event) => {
    editColumn({ id: column.id, title: event.target.value, itemIds: column.itemIds });
  };

  return (
    <OutlinedInput
      fullWidth
      value={column.title}
      onChange={handleColumnRename}
      sx={{
        mb: 1.5,
        fontWeight: 500,
        '& input:focus': {
          bgcolor: theme.palette.mode === ThemeMode.DARK ? theme.palette.secondary[100] : theme.palette.secondary.lighter
        },
        '& input:hover': {
          bgcolor: theme.palette.mode === ThemeMode.DARK ? theme.palette.secondary[100] : theme.palette.secondary.lighter
        },
        '& input:hover + fieldset': {
          display: 'block'
        },
        '&, & input': { bgcolor: 'transparent' },
        '& fieldset': { display: 'none' },
        '& input:focus + fieldset': { display: 'block' }
      }}
    />
  );
};

EditColumn.propTypes = {
  column: PropTypes.object
};

export default EditColumn;
