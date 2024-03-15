import PropTypes from 'prop-types';

// MATERIAL - UI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

// THIRD - PARTY
import { useDropzone } from 'react-dropzone';

// PROJECT IMPORTS
import RejectionFiles from './RejectionFiles';
import PlaceholderContent from './PlaceholderContent';

const DropzoneWrapper = styled('div')(({ theme }) => ({
  outline: 'none',
  overflow: 'hidden',
  position: 'relative',
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create('padding'),
  backgroundColor: theme.palette.background.paper,
  border: `1px dashed ${theme.palette.secondary.main}`,
  '&:hover': { opacity: 0.72, cursor: 'pointer' }
}));

// ==============================|| UPLOAD - SINGLE FILE ||============================== //

const SingleFileUpload = ({ error, file, setFieldValue, sx }) => {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    accept: {
      'image/*': []
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFieldValue(
        'files',
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs =
    file &&
    file.map((item) => (
      <CardMedia
        key={item.name}
        component="img"
        src={item.preview}
        sx={{
          top: 8,
          left: 8,
          borderRadius: 2,
          position: 'absolute',
          width: 'calc(100% - 16px)',
          height: 'calc(100% - 16px)',
          bgcolor: 'background.paper'
        }}
        onLoad={() => {
          URL.revokeObjectURL(item.preview);
        }}
      />
    ));

  const onRemove = () => {
    setFieldValue('files', null);
  };

  return (
    <Box sx={{ width: '100%', ...sx }}>
      <DropzoneWrapper
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: 'error.main',
            borderColor: 'error.light',
            bgcolor: 'error.lighter'
          }),
          ...(file && {
            padding: '12% 0'
          })
        }}
      >
        <input {...getInputProps()} />
        <PlaceholderContent />
        {thumbs}
      </DropzoneWrapper>

      {fileRejections.length > 0 && <RejectionFiles fileRejections={fileRejections} />}

      {file && file.length > 0 && (
        <Stack direction="row" justifyContent="flex-end" sx={{ mt: 1.5 }}>
          <Button variant="contained" color="error" onClick={onRemove}>
            Remove
          </Button>
        </Stack>
      )}
    </Box>
  );
};

SingleFileUpload.propTypes = {
  error: PropTypes.bool,
  file: PropTypes.array,
  setFieldValue: PropTypes.func,
  sx: PropTypes.object
};

export default SingleFileUpload;
