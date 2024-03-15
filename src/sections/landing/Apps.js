'use client';

import { useState } from 'react';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// PROJECT IMPORTS
import FadeInWhenVisible from './Animation';

// THIRD - PARTY
import Slider from 'react-slick';

// ASSETS
const featureFigma = '/assets/images/landing/feature-figma.png';
const featureComponents = '/assets/images/landing/feature-components.png';
const featureDocumentation = '/assets/images/landing/feature-documentation.png';

const Technologies = [
  {
    image: featureFigma,
    title: 'Chat',
    description: 'Power your web apps with the conceptual chat app of Able Pro Dashboard Template.'
  },
  {
    image: featureComponents,
    title: 'E-commerce',
    description: 'Collection, Filter, Product Detail, Add New Product, and Checkout pages makes your e-commerce app complete.'
  },
  {
    image: featureDocumentation,
    title: 'Inbox',
    description: 'Compose Message, List Message (email), Detailed Inbox pages well suited for any conversation based web apps.'
  },
  {
    image: featureDocumentation,
    title: 'User Management',
    description: 'Detailed pages for User Management like Profile settings, role, account settings, social profile and more to explore.'
  }
];
// ==============================|| LANDING - AppsPage ||============================== //

const AppsPage = () => {
  const theme = useTheme();

  const [state, setState] = useState(0);

  function handleChange(value) {
    setState(value);
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box sx={{ bgcolor: 'primary.main' }}>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ pt: { md: 10, xs: 2.5 }, pb: { md: 10, xs: 2.5 } }}>
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="center" sx={{ textAlign: 'center', marginBottom: 3 }}>
              <Grid item xs={12}>
                <Typography variant="h2" color="white">
                  Working Conceptual Apps
                </Typography>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography color="white">
                  Each App is carefully crafted to achieve the best feature rich working concept for your project
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <Grid container spacing={2.5} alignItems="center">
                  {Technologies.map((tech, index) => (
                    <Grid item xs={12} key={index}>
                      <FadeInWhenVisible>
                        <Button
                          onClick={() => {
                            handleChange(index);
                          }}
                          sx={{
                            padding: 4,
                            borderRadius: 1.5,
                            background: theme.palette.secondary.lighter + 20,
                            boxShadow: theme.customShadows.z1
                          }}
                          variant="light"
                        >
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Typography variant="h4" color="white">
                                {tech.title}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography color="white">{tech.description}</Typography>
                            </Grid>
                          </Grid>
                        </Button>
                      </FadeInWhenVisible>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Slider {...settings}>
                  {Technologies.map((tech, index) => (
                    <Box key={index + state} sx={{ width: '100%', textAlign: 'center' }}>
                      <CardMedia component="img" image={tech.image} sx={{ width: '100%' }} />
                    </Box>
                  ))}
                </Slider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default AppsPage;
