// ==============================|| OVERRIDES - TABLE FOOTER ||============================== //

export default function TableFooter(theme) {
  return {
    MuiTableFooter: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.secondary.lighter,
          borderTop: `2px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`
        }
      }
    }
  };
}
