'use client';

import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

// project import
import useConfig from 'hooks/useConfig';
import { ThemeMode } from 'config';

// ==============================|| MAIN CARD - STYLED ||============================== //

const MainCardStyled = styled(Card, {
  shouldForwardProp: (prop) =>
    prop !== 'border' && prop !== 'shadow' && prop !== 'boxShadow' && prop !== 'codeHighlight' && prop !== 'modal'
})(({ theme, border, shadow, boxShadow, codeHighlight, modal }) => {
  boxShadow = theme.palette.mode === ThemeMode.DARK ? boxShadow || true : boxShadow;
  const { themeContrast } = useConfig();
  return {
    position: 'relative',
    overflow: 'inherit',
    border: border ? '1px solid' : 'none',
    borderRadius: theme.spacing(1.5),
    borderColor: theme.palette.divider,
    ...(((themeContrast && boxShadow) || shadow) && {
      boxShadow: shadow ? shadow : theme.customShadows.z1
    }),
    ...(codeHighlight && {
      '& pre': {
        margin: 0,
        padding: '12px !important',
        fontFamily: theme.typography.fontFamily,
        fontSize: '0.75rem'
      }
    }),
    ...(modal && {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: { xs: `calc( 100% - 50px)`, sm: 'auto' },
      '& .MuiCardContent-root': {
        overflowY: 'auto',
        minHeight: 'auto',
        maxHeight: `calc(100vh - 200px)`
      }
    })
  };
});

MainCardStyled.propTypes = {
  border: PropTypes.bool,
  theme: PropTypes.object,
  open: PropTypes.bool,
  boxShadow: PropTypes.bool,
  shadow: PropTypes.string,
  codeHighlight: PropTypes.bool,
  modal: PropTypes.bool
};

export default MainCardStyled;
