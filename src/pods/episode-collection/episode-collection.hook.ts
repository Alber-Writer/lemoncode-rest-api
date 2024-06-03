import React from 'react';
import { useNavigate } from 'react-router-dom';
import { switchRoutes } from 'core/router';

import { EpisodeEntityVm } from './episode-collection.vm';
import { EpisodePagination, getEpisodeCollection } from './api';
import { mapFromApiToVm } from './episode-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useEpisodesCollection = () => {
  const [episodesCollection, setEpisodesCollection] = React.useState<EpisodeEntityVm[]>([]);
  const [pageInfo, setPageInfo] = React.useState<EpisodePagination | null>(
    null
  );
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const navigate = useNavigate();

  //TODO: improve error handling
  const errorHandler = () => {
    const displayErrorMessage = () => {
      setErrorMessage('Collection not found.');
    };
    const removeErrorMessage = () => {
      setErrorMessage('');
    };

    const nextStep = () => {
      removeErrorMessage();
      const visitPage = navigate(switchRoutes.episodeCollection);
      return { visitPage };
    };

    return { displayErrorMessage, nextStep, removeErrorMessage };
  };


  const loadEpisodesCollection = async (
    pageNum: number = 1,
  ) => {
    const {episodes} = await getEpisodeCollection(pageNum) ?? {};
    setEpisodesCollection(mapToCollection(episodes.results, mapFromApiToVm))
    setPageInfo(episodes.info)
  };

  return {
    episodesCollection,
    loadEpisodesCollection,
    pageInfo,
    errorMessage,
    errorHandling:errorHandler,
  };
};
