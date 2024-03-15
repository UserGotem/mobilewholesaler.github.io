'use client';

import PropTypes from 'prop-types';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// PROJECT IMPORT
import { ThemeMode } from 'config';

// ASSETS
import { Code1, Link1 } from 'iconsax-react';

// ==============================|| COMPONENTS - BREADCRUMBS  ||============================== //

const ComponentHeader = ({ title, caption, directory, link }) => {
  const theme = useTheme();

  return (
    <Box sx={{ pl: { xs: 1.5, sm: 3, xl: 8 } }}>
      <Stack spacing={1.25}>
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        {caption && (
          <Typography variant="h6" color="text.secondary">
            {caption}
          </Typography>
        )}
        {directory && (
          <Typography variant="caption" color="text.secondary">
            <Stack direction="row" alignItems="center" columnGap={1}>
              <Code1 size={14} />
              {directory}
            </Stack>
          </Typography>
        )}
        {link && (
          <Box>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Link1 size={16} />}
              component={Link}
              href={link}
              target="_blank"
              sx={{
                fontWeight: 500,
                bgcolor: 'secondary.light',
                color: 'secondary.darker',
                '&:hover': {
                  color: 'secondary.lighter',
                  ...(theme.palette.mode === ThemeMode.DARK && {
                    bgcolor: 'secondary.200',
                    color: 'secondary.darker'
                  })
                }
              }}
            >
              Reference
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

ComponentHeader.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  directory: PropTypes.string,
  link: PropTypes.string
};

export default ComponentHeader;
