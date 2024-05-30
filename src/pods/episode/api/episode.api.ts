import { Episode } from './episode.api-model';
import { CONSTANTS } from 'core/env';
import { graphQLClient } from 'core/api';
import { gql } from 'graphql-request';

interface GetEpisodeResponse{
  episode:Episode
}

export const getEpisode = async (id: number = 1): Promise<Episode> => {
  const query = gql`
  query{
    episode(id:"${id}"){
      name
      episode
      air_date
      characters{id,image,name,status,species}
    }
  }
  `;
  try {
    const { episode } = await graphQLClient.request<GetEpisodeResponse>(query);
    return episode;
  } catch (error) {
      console.log('Not found');
      throw undefined;
  }
};
