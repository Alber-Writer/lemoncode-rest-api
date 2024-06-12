import React from 'react';
import { mapFromApiToVm } from './character-collection.mapper';
import { StandardApiPagination, useGeneralApiCollection } from 'core/api/api-collection.hook';
import { useNavigate } from 'react-router-dom';
import { getCharacterCollection } from './api';
import { mapToCollection } from 'common/mappers';
import { switchRoutes } from 'core/router';
import { CharacterEntityVm } from './character-collection.vm';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>([]);
  const [pageInfo, setPageInfo] = React.useState<StandardApiPagination | null>(
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
      const visitPage = navigate(switchRoutes.characterCollection);
      return { visitPage };
    };

    return { displayErrorMessage, nextStep, removeErrorMessage };
  };

  const loadCharacterCollection = (pageNum: number = 1, searchParams: string = '') => {
    getCharacterCollection(pageNum, searchParams)
      .then((result) => {
        errorHandler().removeErrorMessage();
        setCharacterCollection(mapToCollection(result, mapFromApiToVm));
      })
      .catch((error) => {
        errorHandler().displayErrorMessage();
      });
  };

  return {
    characterCollection,
    loadCharacterCollection,
    pageInfo,
    errorMessage,
    errorHandling:errorHandler,
  };
};
