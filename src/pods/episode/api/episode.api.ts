import { Episode } from './episode.api-model';
import Axios, { AxiosError } from 'axios';
import { CONSTANTS } from 'core/env';

const baseUrl = CONSTANTS.API_BASE_URL + 'episode';
export const getEpisode = async (id: number = 1): Promise<Episode> => {
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

const isNotFoundError = (error: AxiosError): boolean => {
  const errorCode = error.response.status;
  return errorCode === 404;
};
