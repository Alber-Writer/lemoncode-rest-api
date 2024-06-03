import { gql } from 'graphql-request';

import { graphQLClient } from 'core/api';
import { LocationApiResponse } from './location-collection.api-model';


interface getLocationCollectionResponse {
  locations: LocationApiResponse;
}

export const getLocationCollection = async (
  pageNumber: number = 1,
): Promise<LocationApiResponse> => {
  const query = gql`
query {
  locations(page:${pageNumber}){
    info{
      count
      pages
      next
      prev
    }
    results{
      id
      name
			type
      dimension
    }
  }
}
  `
  try {
    const { locations } =
      await graphQLClient.request<getLocationCollectionResponse>(query);
    return locations;
  } catch (error) {
    console.log('Not found');
    throw undefined;
  }
};
