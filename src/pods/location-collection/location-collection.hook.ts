import { mapFromApiToVm } from './location-collection.mapper';
import { useGeneralApiCollection } from 'core/api/api-collection.hook';

export const useLocationsCollection = () => {
  const {
    collection,
    loadCollection,
    pageInfo,
    errorMessage,
    errorHandler
  } = useGeneralApiCollection({
    mapFromApiToVm: mapFromApiToVm,
    escapeErrorLink: 'locationCollection',
    endPoint: 'LOCATION',
  });


  const loadLocationsCollection = (
    pageNum: number = 1,
    searchParams: string = ''
  ) => {
    loadCollection(pageNum,searchParams)
  };

  return {
    locationsCollection:collection,
    loadLocationsCollection,
    pageInfo,
    errorMessage,
    errorHandling:errorHandler,
  };
};
