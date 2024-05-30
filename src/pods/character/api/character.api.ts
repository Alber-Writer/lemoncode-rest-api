import { Character } from './character.api-model';
import { graphQLClient } from 'core/api';
import { gql } from 'graphql-request';
interface GetCharacterResponse {
  character: Character;
}
export const getCharacter = async (id: number = 1): Promise<Character> => {
  const query = gql`
  query {
  character(id:"${id}"){
    name
    image
    status
    species
    gender
    origin{name, id}
    location{name, id}
    episode{id,name,episode}
  }
  }
  `;
  try {
    const { character } = await graphQLClient.request<GetCharacterResponse>(
      query
    );
    return character;
  } catch (error) {
    console.log('Not found')

  }
};
