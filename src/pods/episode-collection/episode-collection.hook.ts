import { mapFromApiToVm } from './episode-collection.mapper';
import { useApiCollection } from 'core/api/api-collection.hook';

export const useEpisodesCollection = () => {
  const {
    collection,
    loadCollection,
    pageInfo,
    errorMessage,
    errorHandler
  } = useApiCollection({
    mapFromApiToVm: mapFromApiToVm,
    escapeErrorLink: 'episodeCollection',
    endPoint: 'EPISODE',
  });


  const loadEpisodesCollection = (
    pageNum: number = 1,
    searchParams: string = ''
  ) => {
    loadCollection(pageNum,searchParams)
  };

  return {
    episodesCollection:collection,
    loadEpisodesCollection,
    pageInfo,
    errorMessage,
    errorHandling:errorHandler,
  };
};
