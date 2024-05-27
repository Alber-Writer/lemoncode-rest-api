import Axios, { AxiosError } from 'axios';
import { baseUrl } from '../api-collection.hook';
import { ENDPOINTS_DEF } from 'core/env';
import { ApiResponse } from '../api-collection.hook';

export const isNotFoundError = (error: AxiosError): boolean => {
  const errorCode = error.response.status;
  return errorCode === 404;
};

export const getCollection = async <AM>(
  pageNumber: number = 1,
  searchParams: string = '',
  endPoint: keyof typeof ENDPOINTS_DEF
): Promise<ApiResponse<AM>> => {
  try {
    const { data } = await Axios.get(
      `${baseUrl}${ENDPOINTS_DEF[endPoint]}/?page=${pageNumber}${searchParams ? `&${searchParams}` : ''}`
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


