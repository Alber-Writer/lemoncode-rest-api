import Axios, { AxiosError } from 'axios';
import {
  LocationApiResponse,
} from './location-collection.api-model';
import { CONSTANTS } from 'core/env';

const locationUrl = CONSTANTS.API_BASE_URL + 'location';

export const getLocationCollection = async (
  pageNumber: number = 1,
  searchParams: string = ''
): Promise<LocationApiResponse> => {
  try {
    const { data } = await Axios.get(
      `${locationUrl}/?page=${pageNumber}${searchParams ? `&${searchParams}` : ''}`
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
