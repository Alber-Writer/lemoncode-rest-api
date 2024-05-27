import Axios from 'axios';
import { baseUrl } from '../api-collection.hook';
import { ENDPOINTS_DEF } from 'core/env';
import { isNotFoundError } from './get-general-collection';


export const getSpecificCollection = async <AM>(
  endPoint: keyof typeof ENDPOINTS_DEF,
  collectionIds: string
): Promise<AM[]> => {
  try {
    const { data } = await Axios.get(
      `${baseUrl}${ENDPOINTS_DEF[endPoint]}/${collectionIds}`
    );
    const checkIfMatchOneApiModelItem = (item:unknown):item is AM => data['id'] !== undefined;
    if(checkIfMatchOneApiModelItem(data)) {
      return [data];
    }
    return data;
  } catch (error) {
    if (isNotFoundError(error)) {
      console.log('Not found');
      throw undefined;
    }
    throw error;
  }
};
