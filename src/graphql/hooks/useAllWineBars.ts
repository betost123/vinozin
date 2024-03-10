import {useQuery} from '@apollo/client';
import {GET_ALL_WINE_BARS} from '../queries/getAllWineBars';

export const useAllWineBars = () => {
  const {data, error, loading, refetch} = useQuery(GET_ALL_WINE_BARS, {});
  return {
    winebars: data?.winebarCollection,
    error: error,
    loading: loading,
    refetch,
  };
};
