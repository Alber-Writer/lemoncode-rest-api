import { mapFromApiToVm } from './character-collection.mapper';
import { useGeneralApiCollection } from 'core/api/api-collection.hook';

export const useCharacterCollection = () => {
  const {
    collection,
    loadCollection,
    pageInfo,
    errorMessage,
    errorHandler
  } = useGeneralApiCollection({
    mapFromApiToVm: mapFromApiToVm,
    escapeErrorLink: 'characterCollection',
    endPoint: 'CHARACTER',
  });

  const loadCharacterCollection = (
    pageNum: number = 1,
    searchParams: string = ''
  ) => {
    loadCollection(pageNum, searchParams)
  };

  return {
    characterCollection:collection,
    loadCharacterCollection,
    pageInfo,
    errorMessage,
    errorHandling:errorHandler,
  };
};
