'use client';

// NEXT
import Link from 'next/link';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Links from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// THIRD - PARTY
import { motion } from 'framer-motion';

// ASSETS
import AnimateButton from 'components/@extended/AnimateButton';
const techBootstrap = '/assets/images/landing/tech-bootstrap.svg';
const techReact = '/assets/images/landing/tech-react.svg';
const techMui = '/assets/images/landing/tech-mui.svg';
const techCodeigniter = '/assets/images/landing/tech-codeigniter.svg';
const techNet = '/assets/images/landing/tech-net.svg';
const techFigma = '/assets/images/landing/tech-figma.svg';

// ==============================|| LANDING - HeaderPage ||============================== //

const HeaderPage = () => {
  const theme = useTheme();

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ pt: { md: 0, xs: 8 }, pb: { md: 0, xs: 17 } }}>
        <Grid item xs={12} md={9}>
          <Grid container spacing={3} sx={{ textAlign: 'center' }}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Typography
                  variant="h1"
                  sx={{ fontSize: { xs: '1.825rem', sm: '2rem', md: '3.4375rem' }, fontWeight: 700, lineHeight: 1.2 }}
                >
                  <span>Explore One of the </span>
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(90deg, rgb(37, 161, 244), rgb(249, 31, 169), rgb(37, 161, 244)) 0 0 / 400% 100%',
                      color: 'transparent',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      animation: 'move-bg 24s infinite linear',
                      '@keyframes move-bg': {
                        '100%': {
                          backgroundPosition: '400% 0'
                        }
                      }
                    }}
                  >
                    <span>Featured Dashboard </span>
                  </Box>
                  <span> Template in Themeforest</span>
                </Typography>
              </motion.div>
            </Grid>
            <Grid container justifyContent="center" item xs={12}>
              <Grid item xs={8}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    delay: 0.2
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, fontWeight: 400, lineHeight: { xs: 1.4, md: 1.4 } }}
                  >
                    Able Pro is the one of the Featured admin dashboard template in Envato Marketplace and used by over 2.5K+ Customers
                    wordwide.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <AnimateButton>
                      <Button component={Link} href="/components-overview/buttons" size="large" color="secondary" variant="outlined">
                        Explore Components
                      </Button>
                    </AnimateButton>
                  </Grid>
                  <Grid item>
                    <AnimateButton>
                      <Button component={Link} href="/login" target="_blank" size="large" color="primary" variant="contained">
                        Live Preview
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.6
                }}
              >
                <Grid container spacing={3} justifyContent="center">
                  <Grid
                    item
                    sx={{
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        height: 30,
                        bottom: 10,
                        left: 'auto',
                        right: '-12px',
                        width: '1px',
                        bgcolor: 'divider'
                      }
                    }}
                  >
                    <Rating name="read-only" value={4.5} size="small" readOnly />
                    <Typography variant="h4">
                      4.7/5
                      <span
                        style={{
                          fontSize: '75%',
                          fontWeight: 400,
                          margin: 5,
                          color: theme.palette.text.secondary
                        }}
                      >
                        Ratings
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">
                      <span
                        style={{
                          fontSize: '75%',
                          fontWeight: 400,
                          color: theme.palette.text.secondary
                        }}
                      >
                        Sales
                      </span>
                    </Typography>
                    <Typography variant="h4">2.5K+</Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          position: 'absolute',
          bottom: { xs: -30, sm: 0 },
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.paper',
          borderTop: `1px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{
            '& > .MuiGrid-item': {
              borderRight: `1px solid ${theme.palette.divider}`,
              '&:first-of-type': {
                borderLeft: `1px solid ${theme.palette.divider}`
              },
              '& img': {
                padding: 1.3
              }
            }
          }}
        >
          <Grid item>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 0.8
              }}
            >
              <Tooltip title="Click to Preview Bootstrap 5">
                <Links component={Link} href="https://ableproadmin.com/dashboard/index.html" target="_blank">
                  <CardMedia component="img" image={techBootstrap} sx={{ width: 'auto' }} />
                </Links>
              </Tooltip>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 0.9
              }}
            >
              <Tooltip title="Click to Preview React">
                <Links component={Link} href="https://ableproadmin.com/react/" target="_blank">
                  <CardMedia component="img" image={techReact} sx={{ width: 'auto' }} />
                </Links>
              </Tooltip>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 1
              }}
            >
              <Tooltip title="Click to Preview React Material UI">
                <Links component={Link} href="https://ableproadmin.com/react/" target="_blank">
                  <CardMedia component="img" image={techMui} sx={{ width: 'auto' }} />
                </Links>
              </Tooltip>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 1.1
              }}
            >
              <Tooltip title="Click to Preview CodeIgniter">
                <Links component={Link} href="https://ableproadmin.com/codeigniter/default/public/" target="_blank">
                  <CardMedia component="img" image={techCodeigniter} sx={{ width: 'auto' }} />
                </Links>
              </Tooltip>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 1.2
              }}
            >
              <Tooltip title="Click to Preview ASP.net">
                <Links component={Link} href="https://able-pro.azurewebsites.net/" target="_blank">
                  <CardMedia component="img" image={techNet} sx={{ width: 'auto' }} />
                </Links>
              </Tooltip>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 1.3
              }}
            >
              <Tooltip title="Figma Design System">
                <Links component={Link} href="https://links.codedthemes.com/mQZrX" target="_blank">
                  <CardMedia component="img" image={techFigma} sx={{ width: 'auto' }} />
                </Links>
              </Tooltip>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default HeaderPage;
