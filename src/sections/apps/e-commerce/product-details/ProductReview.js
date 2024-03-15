import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import ListItem from '@mui/material/ListItem';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress from '@mui/material/LinearProgress';
import ListItemAvatar from '@mui/material/ListItemAvatar';

// THIRD - PARTY
import { format } from 'date-fns';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import ProductReview from 'components/cards/e-commerce/ProductReview';
import { useGetProductReviews } from 'api/products';

// ASSETS
import { EmojiHappy, Image as ImageIcon, Paperclip2 } from 'iconsax-react';

// progress
function LinearProgressWithLabel({ star, color, value, ...others }) {
  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center">
        <LinearProgress
          value={value}
          variant="determinate"
          color={color}
          {...others}
          sx={{ width: '100%', bgcolor: 'secondary.lighter' }}
        />
        <Typography variant="body2" sx={{ minWidth: 50 }} color="textSecondary">{`${Math.round(star)} Star`}</Typography>
      </Stack>
    </>
  );
}

LinearProgressWithLabel.propTypes = {
  star: PropTypes.number,
  color: PropTypes.string,
  value: PropTypes.number
};

// ==============================|| PRODUCT DETAILS - REVIEWS ||============================== //

const ProductReviews = ({ product }) => {
  const theme = useTheme();
  const { productReviewsLoading, productReviews } = useGetProductReviews();

  let productReview = (
    <Grid item xs={12}>
      <List>
        {[1, 2, 3].map((index) => (
          <MainCard content={false} key={index} sx={{ mb: 2.5 }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar sx={{ minWidth: 72 }}>
                <Skeleton variant="rectangular" width={62} height={62} />
              </ListItemAvatar>
              <ListItemText
                primary={<Skeleton animation="wave" height={22} />}
                secondary={
                  <>
                    <Skeleton animation="wave" height={14} width="60%" />
                    <Skeleton animation="wave" height={18} width="20%" />
                    <Skeleton animation="wave" height={14} width="35%" sx={{ mt: 1.25 }} />
                    <Skeleton animation="wave" height={14} width="100%" />
                    <Skeleton animation="wave" height={14} width="55%" />
                  </>
                }
              />
            </ListItem>
          </MainCard>
        ))}
      </List>
    </Grid>
  );

  if (productReviews && !productReviewsLoading) {
    productReview = productReviews.map((review, index) => (
      <Grid item xs={12} key={index}>
        <MainCard sx={{ bgcolor: theme.palette.secondary.lighter }}>
          <ProductReview
            avatar={review.profile.avatar}
            date={format(new Date(review.date), 'dd/MM, yyyy h:dd:ss a')}
            name={review.profile.name}
            rating={review.rating}
            review={review.review}
          />
        </MainCard>
      </Grid>
    ));
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard>
          <Grid container justifyContent="space-between" alignItems="center" spacing={2.5}>
            <Grid item>
              {product && (
                <Stack spacing={1} sx={{ height: '100%' }}>
                  <Stack spacing={1}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="h2">{Number((product.rating < 4 ? product.rating + 1 : product.rating).toFixed(1))}</Typography>
                      <Typography variant="h4" color="textSecondary">
                        /5
                      </Typography>
                    </Stack>
                    <Typography color="textSecondary">Based on {product.offerPrice?.toFixed(0)} reviews</Typography>
                  </Stack>
                  <Rating
                    name="simple-controlled"
                    value={product.rating < 4 ? product.rating + 1 : product.rating}
                    readOnly
                    precision={0.1}
                  />
                </Stack>
              )}
            </Grid>
            <Grid item>
              <Grid container alignItems="center" justifyContent="space-between" spacing={1}>
                <Grid item xs={12}>
                  <LinearProgressWithLabel color="warning" star={5} value={100} />
                </Grid>
                <Grid item xs={12}>
                  <LinearProgressWithLabel color="warning" star={4} value={80} />
                </Grid>
                <Grid item xs={12}>
                  <LinearProgressWithLabel color="warning" star={3} value={60} />
                </Grid>
                <Grid item xs={12}>
                  <LinearProgressWithLabel color="warning" star={2} value={40} />
                </Grid>
                <Grid item xs={12}>
                  <LinearProgressWithLabel color="warning" star={1} value={20} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>

      {productReview}
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="center">
          <Button variant="text" sx={{ textTransform: 'none' }}>
            {' '}
            View more comments{' '}
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ p: 2, pb: 1.5, border: `1px solid ${theme.palette.divider}` }}>
          <Grid container alignItems="center" spacing={0.5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Add Comment"
                sx={{
                  mb: 3,
                  '& input': { bgcolor: 'transparent', p: 0, borderRadius: '0px' },
                  '& fieldset': { display: 'none' },
                  '& .MuiFormHelperText-root': {
                    ml: 0
                  },
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'transparent',
                    '&.Mui-focused': {
                      boxShadow: 'none'
                    }
                  }
                }}
              />
            </Grid>
            <Grid item>
              <IconButton>
                <Paperclip2 />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <ImageIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <EmojiHappy />
              </IconButton>
            </Grid>
            <Grid item xs zeroMinWidth />
            <Grid item>
              <Button size="small" variant="contained" color="primary">
                Comment
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

ProductReviews.propTypes = {
  product: PropTypes.object
};

export default ProductReviews;
