import { Character } from './character.api-model';
import Axios, { AxiosError } from 'axios';
import { CONSTANTS } from 'core/env';

const baseUrl = CONSTANTS.API_BASE_URL + 'character';
export const getCharacter = async (id: number = 1): Promise<Character> => {
  try{
    const {data} = await Axios.get(`${baseUrl}/${id}`);
    return data
  }catch(error){
    if(isNotFoundError(error)){
      console.log('Not found')
      throw undefined;
    }
    throw error
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};

const isNotFoundError = (error: AxiosError): boolean => {
  const errorCode = error.response.status;
  return errorCode === 404;
};
