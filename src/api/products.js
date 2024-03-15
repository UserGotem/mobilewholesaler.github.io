import { useMemo } from 'react';

// THIRD_PARTY
import useSWR, { mutate } from 'swr';

// PROJECT_IMPORTS
import axios, { fetcher, fetcherPost } from 'utils/axios';

export const endpoints = {
  key: 'api/products',
  list: '/list', // server URL
  filter: '/filter', // server URL
  related: 'api/product/related', // server URL
  review: 'api/review/list' // server URL
};

export function useGetProducts() {
  const { data, isLoading, error, isValidating } = useSWR(endpoints.key + endpoints.list, fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true
  });

  const memoizedValue = useMemo(
    () => ({
      products: data?.products,
      productsLoading: isLoading,
      productsError: error,
      productsValidating: isValidating,
      productsEmpty: !isLoading && !data?.products?.length
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export async function productFilter(filter) {
  const newProducts = await axios.post(endpoints.key + endpoints.filter, { filter });

  // to update local state based on key
  mutate(
    endpoints.key + endpoints.list,
    (currentProducts) => {
      return {
        ...currentProducts,
        products: newProducts.data
      };
    },
    false
  );
}

export function useGetReleatedProducts(id) {
  const URL = [endpoints.related, { id, endpoints: 'products' }];

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcherPost, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(
    () => ({
      relatedProducts: data,
      relatedProductsLoading: isLoading,
      relatedProductsError: error,
      relatedProductsValidating: isValidating,
      relatedProductsEmpty: !isLoading && !data?.length
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetProductReviews() {
  const { data, isLoading, error, isValidating } = useSWR(endpoints.review, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(
    () => ({
      productReviews: data?.productReviews,
      productReviewsLoading: isLoading,
      productReviewsError: error,
      productReviewsValidating: isValidating,
      productReviewsEmpty: !isLoading && !data?.productReviews.length
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
