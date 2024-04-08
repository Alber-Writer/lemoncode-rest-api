import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockCharacterCollection } from './character.mock-data';
import Axios from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: number = 1): Promise<Character> => {
  // return mockCharacterCollection.find((c) => c.id === id);
  const {data} = await Axios.get(`${baseUrl}/${id}`);
  return data
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
