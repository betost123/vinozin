import {gql} from '@apollo/client';

export const GET_ALL_WINES = gql`
  query getAllWines {
    wineCollection {
      items {
        id
        name
        image {
          url
        }
        country
        region
        grape
        color
        type
        year
        description
        producer
        character
      }
    }
  }
`;
