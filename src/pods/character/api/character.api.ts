import { Character, CharacterEntityApi } from './character.api-model';
import Axios, { AxiosError } from 'axios';
import { CONSTANTS, ENDPOINTS_DEF } from 'core/env';

const baseUrl = CONSTANTS.LOCAL_API_BASE_URL + ENDPOINTS_DEF.CHARACTER;
export const getCharacter = async (id: number = 1): Promise<CharacterEntityApi> => {
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

export const updateBestSentences = async(id:number, sentences:string[]):Promise<boolean>=>{
  try{
    await Axios.patch(`${baseUrl}/${id}`, {bestSentences:sentences});
    return true
  }catch(error){
    console.log('Update sentences failed')
    throw undefined;
  }
}

const isNotFoundError = (error: AxiosError): boolean => {
  const errorCode = error.response.status;
  return errorCode === 404;
};
