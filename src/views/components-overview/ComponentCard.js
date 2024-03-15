'use client';

// NEXT
import Link from 'next/link';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Links from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';
import MoreIcon from 'components/@extended/MoreIcon';
import IconButton from 'components/@extended/IconButton';
import ComponentHeader from 'components/cards/ComponentHeader';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import CardTabs from 'sections/components-overview/cards/CardTabs';

// ASSETS
import { Edit, Setting } from 'iconsax-react';
const media = '/assets/images/component/card-media.png';

// ==============================|| COMPONENTS - CARD ||============================== //

const ComponentCard = () => {
  const theme = useTheme();

  const cardAction = (
    <ToggleButtonGroup
      fullWidth
      color="primary"
      exclusive
      aria-label="text alignment"
      size="small"
      sx={{
        p: 1,
        '& .MuiToggleButton-root': {
          borderRadius: 0,
          p: 0.75,
          '&:not(.Mui-selected)': {
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent'
          },
          '&:first-of-type': {
            borderLeftColor: 'transparent'
          },
          '&:last-of-type': {
            borderRightColor: 'transparent'
          },
          '&:hover': {
            bgcolor: 'transparent',
            color: theme.palette.primary.main
          }
        }
      }}
    >
      <ToggleButton value="web" aria-label="web">
        <Setting />
      </ToggleButton>
      <ToggleButton value="android" aria-label="android">
        <Edit />
      </ToggleButton>
      <ToggleButton value="ios" aria-label="ios">
        <MoreIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );

  const basicCardCodeString = `<MainCard border={false} shadow={theme.customShadows.z1} sx={{ height: '100%' }}>
  <Typography variant="h6">Card Subtitle</Typography>
  <Typography variant="caption" color="textSecondary">
    This is card description
  </Typography>
</MainCard>

<MainCard title="Card Title" border={false} shadow={theme.customShadows.z1} sx={{ height: '100%' }}>
  <Typography variant="h6">Card Subtitle</Typography>
  <Typography variant="caption" color="textSecondary">
    This is card description
  </Typography>
</MainCard>`;

  const outlinedCardCodeString = `<MainCard sx={{ height: '100%' }}>
  <Typography variant="h6">Card Subtitle</Typography>
  <Typography variant="caption" color="textSecondary">
    This is card description
  </Typography>
</MainCard>

<MainCard title="Card Title" sx={{ height: '100%' }}>
  <Typography variant="h6">Card Subtitle</Typography>
  <Typography variant="caption" color="textSecondary">
    This is card description
  </Typography>
</MainCard>`;

  const actionCardCodeString = `<MainCard
  title="Card Title"
  secondary={
    <Links color="primary" href="/">
      More
    </Links>
  }
>
  <Typography variant="h5" color="textSecondary" gutterBottom>
    Card Subtitle
  </Typography>
  <Typography variant="body1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim.
  </Typography>
</MainCard>
<MainCard
  title="Card Title"
  secondary={
    <Links color="primary" sx={{ transform: 'rotate(90deg)' }} href="/">
      <MoreIcon />
    </Links>
  }
>
  <Typography variant="h5" color="textSecondary" gutterBottom>
    Card Subtitle
  </Typography>
  <Typography variant="body1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper
    ligula. Mauris purus sem.
  </Typography>
</MainCard>

<MainCard
  title="Card Title"
  secondary={
    <Links color="primary" sx={{ transform: 'rotate(90deg)' }} href="/">
      <MoreIcon />
    </Links>
  }
  content={false}
>
  <CardContent>
    <Typography variant="h5" color="textSecondary" gutterBottom>
      Card Subtitle
    </Typography>
    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
  </CardContent>
  <Divider />
  <ToggleButtonGroup
    fullWidth
    color="primary"
    exclusive
    aria-label="text alignment"
    size="small"
    sx={{
      p: 1,
      '& .MuiToggleButton-root': {
        borderRadius: 0,
        p: 0.75,
        '&:not(.Mui-selected)': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '&:first-of-type': {
          borderLeftColor: 'transparent'
        },
        '&:last-of-type': {
          borderRightColor: 'transparent'
        },
        '&:hover': {
          bgcolor: 'transparent',
          color: theme.palette.primary.main
        }
      }
    }}
  >
    <ToggleButton value="web" aria-label="web">
      <Setting />
    </ToggleButton>
    <ToggleButton value="android" aria-label="android">
      <Edit />
    </ToggleButton>
    <ToggleButton value="ios" aria-label="ios">
      <MoreIcon />
    </ToggleButton>
  </ToggleButtonGroup>
</MainCard>`;

  const mediaCardCodeString = `<MainCard content={false}>
  <CardMedia component="img" image={media} alt="green iguana" />
  <CardContent>
    <Typography variant="h5" color="textSecondary" gutterBottom>
      Card Subtitle
    </Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu.
    </Typography>
  </CardContent>
  <Divider />
  <ToggleButtonGroup
    fullWidth
    color="primary"
    exclusive
    aria-label="text alignment"
    size="small"
    sx={{
      p: 1,
      '& .MuiToggleButton-root': {
        borderRadius: 0,
        p: 0.75,
        '&:not(.Mui-selected)': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '&:first-of-type': {
          borderLeftColor: 'transparent'
        },
        '&:last-of-type': {
          borderRightColor: 'transparent'
        },
        '&:hover': {
          bgcolor: 'transparent',
          color: theme.palette.primary.main
        }
      }
    }}
  >
    <ToggleButton value="web" aria-label="web">
      <Setting />
    </ToggleButton>
    <ToggleButton value="android" aria-label="android">
      <Edit />
    </ToggleButton>
    <ToggleButton value="ios" aria-label="ios">
      <MoreIcon />
    </ToggleButton>
  </ToggleButtonGroup>
</MainCard>

<MainCard
  title="Card Title"
  secondary={
    <Links color="primary" sx={{ transform: 'rotate(90deg)' }} href="/">
      <MoreIcon />
    </Links>
  }
  content={false}
>
  <CardMedia component="img" image={media} alt="green iguana" />
  <CardContent>
    <Typography variant="h5" color="textSecondary" gutterBottom>
      Card Subtitle
    </Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu,
    </Typography>
  </CardContent>
</MainCard>

<MainCard
  title="Card Title"
  secondary={
    <Links color="primary" sx={{ transform: 'rotate(90deg)' }} href="/">
      <MoreIcon />
    </Links>
  }
  content={false}
>
  <CardMedia component="img" image={media} alt="green iguana" />
  <CardContent>
    <Typography variant="h5" color="textSecondary" gutterBottom>
      Card Subtitle
    </Typography>
    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
  </CardContent>
  <Divider />
  <ToggleButtonGroup
    fullWidth
    color="primary"
    exclusive
    aria-label="text alignment"
    size="small"
    sx={{
      p: 1,
      '& .MuiToggleButton-root': {
        borderRadius: 0,
        p: 0.75,
        '&:not(.Mui-selected)': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '&:first-of-type': {
          borderLeftColor: 'transparent'
        },
        '&:last-of-type': {
          borderRightColor: 'transparent'
        },
        '&:hover': {
          bgcolor: 'transparent',
          color: theme.palette.primary.main
        }
      }
    }}
  >
    <ToggleButton value="web" aria-label="web">
      <Setting />
    </ToggleButton>
    <ToggleButton value="android" aria-label="android">
      <Edit />
    </ToggleButton>
    <ToggleButton value="ios" aria-label="ios">
      <MoreIcon />
    </ToggleButton>
  </ToggleButtonGroup>
</MainCard>`;

  const complexCardCodeString = `<MainCard content={false}>
  <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Article" {...a11yProps(0)} />
        <Tab label="App" {...a11yProps(1)} />
        <Tab label="Project" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <Typography variant="h5" gutterBottom color="textSecondary">
        Article Content
      </Typography>
      <Typography variant="h6" gutterBottom={!activeTab}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
        purus sem, sagittis eu mauris et, viverra lobortis urna.
      </Typography>
      {!activeTab && (
        <Typography variant="h6">
          Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis.
          Suspendisse blandit velit sit amet velit porta aliquet.
        </Typography>
      )}
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Typography variant="h5" gutterBottom color="textSecondary">
        App Content
      </Typography>
      <Typography variant="h6">
        Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
        semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
      </Typography>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <Typography variant="h5" gutterBottom color="textSecondary">
        Project Content
      </Typography>
      <Typography variant="h6">
        Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
        cursus in nec est.
      </Typography>
    </TabPanel>
  </Box>
</MainCard>

<MainCard
  title="Card Title"
  divider={false}
  content={false}
  secondary={
    <Links color="primary" href="/">
      More
    </Links>
  }
>
  <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Article" {...a11yProps(0)} />
        <Tab label="App" {...a11yProps(1)} />
        <Tab label="Project" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <Typography variant="h5" gutterBottom color="textSecondary">
        Article Content
      </Typography>
      <Typography variant="h6" gutterBottom={!activeTab}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
        purus sem, sagittis eu mauris et, viverra lobortis urna.
      </Typography>
      {!activeTab && (
        <Typography variant="h6">
          Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis.
          Suspendisse blandit velit sit amet velit porta aliquet.
        </Typography>
      )}
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Typography variant="h5" gutterBottom color="textSecondary">
        App Content
      </Typography>
      <Typography variant="h6">
        Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
        semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
      </Typography>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <Typography variant="h5" gutterBottom color="textSecondary">
        Project Content
      </Typography>
      <Typography variant="h6">
        Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
        cursus in nec est.
      </Typography>
    </TabPanel>
  </Box>
</MainCard>`;

  return (
    <>
      <ComponentHeader
        title="Card"
        caption="Cards contain content and actions about a single subject."
        directory="src/pages/components-overview/cards"
        link="https://mui.com/material-ui/react-card/"
      />
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MainCard title="Basic" codeString={basicCardCodeString}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MainCard border={false} shadow={theme.customShadows.z1} sx={{ height: '100%' }}>
                    <Typography variant="h6">Card Subtitle</Typography>
                    <Typography variant="caption" color="textSecondary">
                      This is card description
                    </Typography>
                  </MainCard>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MainCard title="Card Title" border={false} shadow={theme.customShadows.z1} sx={{ height: '100%' }}>
                    <Typography variant="h6">Card Subtitle</Typography>
                    <Typography variant="caption" color="textSecondary">
                      This is card description
                    </Typography>
                  </MainCard>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Outlined" codeString={outlinedCardCodeString}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MainCard sx={{ height: '100%' }}>
                    <Typography variant="h6">Card Subtitle</Typography>
                    <Typography variant="caption" color="textSecondary">
                      This is card description
                    </Typography>
                  </MainCard>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MainCard title="Card Title" sx={{ height: '100%' }}>
                    <Typography variant="h6">Card Subtitle</Typography>
                    <Typography variant="caption" color="textSecondary">
                      This is card description
                    </Typography>
                  </MainCard>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Action" codeString={actionCardCodeString}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <MainCard
                    title="Card Title"
                    secondary={
                      <Links component={Link} href="#" color="primary">
                        More
                      </Links>
                    }
                  >
                    <Typography variant="h5" color="textSecondary" gutterBottom>
                      Card Subtitle
                    </Typography>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim.
                    </Typography>
                  </MainCard>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MainCard
                    title="Card Title"
                    secondary={
                      <IconButton sx={{ transform: 'rotate(90deg)' }} size="small" color="secondary">
                        <MoreIcon />
                      </IconButton>
                    }
                  >
                    <Typography variant="h5" color="textSecondary" gutterBottom>
                      Card Subtitle
                    </Typography>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper
                      ligula. Mauris purus sem.
                    </Typography>
                  </MainCard>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MainCard
                    title="Card Title"
                    secondary={
                      <IconButton sx={{ transform: 'rotate(90deg)' }} size="small" color="secondary">
                        <MoreIcon />
                      </IconButton>
                    }
                    content={false}
                  >
                    <CardContent>
                      <Typography variant="h5" color="textSecondary" gutterBottom>
                        Card Subtitle
                      </Typography>
                      <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    </CardContent>
                    <Divider />
                    {cardAction}
                  </MainCard>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Complex Interaction" codeString={complexCardCodeString}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <MainCard content={false}>
                    <CardTabs />
                  </MainCard>
                </Grid>
                <Grid item xs={12}>
                  <MainCard
                    title="Card Title"
                    divider={false}
                    content={false}
                    secondary={
                      <Links component={Link} href="#" color="primary">
                        More
                      </Links>
                    }
                  >
                    <CardTabs activeTab={2} />
                  </MainCard>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} xl={9}>
            <MainCard title="Media" codeString={mediaCardCodeString}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={4}>
                  <MainCard content={false}>
                    <CardMedia component="img" image={media} alt="green iguana" />
                    <CardContent>
                      <Typography variant="h5" color="textSecondary" gutterBottom>
                        Card Subtitle
                      </Typography>
                      <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu.
                      </Typography>
                    </CardContent>
                    <Divider />
                    {cardAction}
                  </MainCard>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <MainCard
                    title="Card Title"
                    secondary={
                      <IconButton sx={{ transform: 'rotate(90deg)' }} size="small" color="secondary">
                        <MoreIcon />
                      </IconButton>
                    }
                    content={false}
                  >
                    <CardMedia component="img" image={media} alt="green iguana" />
                    <CardContent>
                      <Typography variant="h5" color="textSecondary" gutterBottom>
                        Card Subtitle
                      </Typography>
                      <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu,
                      </Typography>
                    </CardContent>
                  </MainCard>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <MainCard
                    title="Card Title"
                    secondary={
                      <IconButton sx={{ transform: 'rotate(90deg)' }} size="small" color="secondary">
                        <MoreIcon />
                      </IconButton>
                    }
                    content={false}
                  >
                    <CardMedia component="img" image={media} alt="green iguana" />
                    <CardContent>
                      <Typography variant="h5" color="textSecondary" gutterBottom>
                        Card Subtitle
                      </Typography>
                      <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    </CardContent>
                    <Divider />
                    {cardAction}
                  </MainCard>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </>
  );
};

export default ComponentCard;
