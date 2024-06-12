import Axios, { AxiosError } from 'axios';
import {
  CharacterApiResponse, CharacterEntityApi,
} from './character-collection.api-model';
import { CONSTANTS, ENDPOINTS_DEF } from 'core/env';

const characterUrl = CONSTANTS.LOCAL_API_BASE_URL + ENDPOINTS_DEF.CHARACTER;

export const getCharacterCollection = async (
  pageNumber: number = 1,
  searchParams: string = ''
): Promise<CharacterEntityApi[]> => {
  try {
    const { data } = await Axios.get(
      `${characterUrl}/?page=${pageNumber}${searchParams ? `&${searchParams}` : ''}`
    );
    return data;
  } catch (error) {
    if (isNotFoundError(error)) {
      console.log('Not found');
      throw undefined;
    }
    throw error;
  }
};

const isNotFoundError = (error: AxiosError): boolean => {
  const errorCode = error.response.status;
  return errorCode === 404;
};
