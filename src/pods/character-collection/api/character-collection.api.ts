import { CharacterApiResponse } from './character-collection.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { plainObjToGraphqlString } from 'common/business/obj-to-graphql-string';

interface getCharacterCollectionResponse {
  characters: CharacterApiResponse;
}

      export const getCharacterCollection = async (
  pageNumber: number = 1,
  searchParams: Partial<CharacterApiResponse>
): Promise<getCharacterCollectionResponse> => {
  const searchParamsCheck = `{${plainObjToGraphqlString(searchParams)}}`;
  const query = gql`
  query{
    characters(page:${pageNumber}, filter:${searchParamsCheck}){
      info{
        count
        pages
        next
        prev
      }
      results{
        id
        name
        image
        species
        status
        origin{
          name
        }
      }
    }
  }`;
  try {
    const { characters } =
      await graphQLClient.request<getCharacterCollectionResponse>(query);
    return { characters };
  } catch (error) {
    console.log('Not found');
    throw undefined;
  }
};
