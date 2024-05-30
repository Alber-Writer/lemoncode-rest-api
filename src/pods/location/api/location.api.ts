import { Location } from './location.api-model';
import { graphQLClient } from 'core/api';
import { gql } from 'graphql-request';

interface GetLocationResponse {
  location: Location;
}

export const getLocation = async (id: number = 1): Promise<Location> => {
  try {
    const query = gql`
      query {
        location(id: "${id}") {
          name
          dimension
          residents {
            id
            image
            name
            status
            species
          }
        }
      }
    `;
    const { location } = await graphQLClient.request<GetLocationResponse>(
      query
    );
    return location;
  } catch (error) {
    console.log('Not found');
    throw undefined;
  }
};
