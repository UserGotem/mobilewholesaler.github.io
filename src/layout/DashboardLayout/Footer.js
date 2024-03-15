// NEXT
import Link from 'next/link';

// MATERIAL - UI
import Links from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ==============================|| MAIN LAYOUT - FOOTER ||============================== //

const Footer = () => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
    <Typography variant="caption">&copy; Able Pro ♥ crafted by Team Phoenixcoded</Typography>
    <Stack spacing={1.5} direction="row" justifyContent="space-between" alignItems="center">
      <Links component={Link} href="https://ableproadmin.com" target="_blank" variant="caption" color="textPrimary">
        Home
      </Links>
      <Links
        component={Link}
        href="https://phoenixcoded.gitbook.io/able-pro/v/nextjs"
        target="_blank"
        variant="caption"
        color="textPrimary"
      >
        Documentation
      </Links>
      <Links component={Link} href="https://phoenixcoded.authordesk.app/" target="_blank" variant="caption" color="textPrimary">
        Support
      </Links>
    </Stack>
  </Stack>
);

export default Footer;
