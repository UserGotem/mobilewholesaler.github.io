import PropTypes from 'prop-types';

// MATERIAL - UI
import TextField from '@mui/material/TextField';

// ==============================|| INVOICE - TEXT FIELD ||============================== //

const InvoiceField = ({ onEditItem, cellData }) => {
  return (
    <TextField
      type={cellData.type}
      placeholder={cellData.placeholder}
      name={cellData.name}
      id={cellData.id}
      value={cellData.type === 'number' ? (cellData.value > 0 ? cellData.value : '') : cellData.value}
      onChange={onEditItem}
      label={cellData.label}
      error={Boolean(cellData.errors && cellData.touched)}
      inputProps={{
        ...(cellData.align === 'right' && { style: { textAlign: 'right' } }),
        ...(cellData.type === 'number' && { min: 0 })
      }}
    />
  );
};

InvoiceField.propTypes = {
  onEditItem: PropTypes.func,
  cellData: PropTypes.object
};

export default InvoiceField;
