import { CARS_URL, HEADERS } from './constants';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export const useBrand = (brand, shouldFetch) => {
  const { data, error } = useSWR(() => (shouldFetch ? `${CARS_URL}${brand}` : null), fetcher);

  return { data, error };
};
