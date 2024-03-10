import {useQuery} from '@apollo/client';
import {GET_ALL_WINES} from '../queries/getAllWines';

export const useAllWines = () => {
  const {data, error, loading, refetch} = useQuery(GET_ALL_WINES, {});
  return {
    wines: data?.wineCollection,
    error: error,
    loading: loading,
    refetch,
  };
};
