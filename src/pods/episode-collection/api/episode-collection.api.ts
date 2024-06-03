import { EpisodeApiResponse } from './episode-collection.api-model';
import { graphQLClient } from 'core/api';
import { gql } from 'graphql-request';
interface getEpisodeCollectionResponse {
  episodes: EpisodeApiResponse;
}
export const getEpisodeCollection = async (
  pageNumber: number = 1,
): Promise<getEpisodeCollectionResponse> => {
  const query = gql`
    query {
      episodes(page: ${pageNumber}) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          episode
          air_date
        }
      }
    }
  `;
  try {
    const { episodes } = await graphQLClient.request<getEpisodeCollectionResponse>(query);
    return {episodes};
  } catch (error) {
    console.log('Not found');
    throw undefined;
  }
};
