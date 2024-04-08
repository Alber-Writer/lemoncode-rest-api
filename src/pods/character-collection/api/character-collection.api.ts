import Axios from 'axios';
import { CharacterApiResponse, CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const baseUrl = 'https://rickandmortyapi.com/api/character'

export const getCharacterCollection = async (pageNumber:number = 1): Promise<CharacterApiResponse> => {
  const {data} = await Axios.get(`${baseUrl}/?page=${pageNumber}`);
  return data
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
