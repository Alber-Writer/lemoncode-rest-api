import Axios, { AxiosError } from 'axios';
import {
  CharacterApiResponse,
  CharacterEntityApi,
} from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';
import { CONSTANTS } from 'core/env';

let characterCollection = [...mockCharacterCollection];
const baseUrl = CONSTANTS.API_BASE_URL + 'character';

export const getCharacterCollection = async (
  pageNumber: number = 1
): Promise<CharacterApiResponse> => {
  try {
    const { data } = await Axios.get(`${baseUrl}/?page=${pageNumber}`);
    return data;
  } catch (error) {
    if (isNotFoundError(error)) {
      console.log('Not found');
      throw undefined;
    }
    throw error;
  }
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};

const isNotFoundError = (error: AxiosError): boolean => {
  const errorCode = error.response.status;
  return errorCode === 404;
};
