import Axios, { AxiosError } from 'axios';
import {
  EpisodeApiResponse,
} from './episode-collection.api-model';
import { CONSTANTS } from 'core/env';

const episodeUrl = CONSTANTS.API_BASE_URL + 'episode';

export const getEpisodeCollection = async (
  pageNumber: number = 1,
  searchParams: string = ''
): Promise<EpisodeApiResponse> => {
  try {
    const { data } = await Axios.get(
      `${episodeUrl}/?page=${pageNumber}${searchParams ? `&${searchParams}` : ''}`
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
