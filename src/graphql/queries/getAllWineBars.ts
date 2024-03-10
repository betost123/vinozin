import {gql} from '@apollo/client';

export const GET_ALL_WINE_BARS = gql`
  query getAllWineBars {
    winebarCollection {
      items {
        id
        name
        logo {
          url
        }
        website
        address {
          lat
          lon
        }
      }
    }
  }
`;
