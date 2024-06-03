import React from 'react';
import { CharacterApiResponse, CharacterPagination, getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { CharacterEntityVm } from './character-collection.vm';
import { useNavigate } from 'react-router-dom';
import { switchRoutes } from 'core/router';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [collection, setCollection] = React.useState<CharacterEntityVm[]>([]);
  const [pageInfo, setPageInfo] = React.useState<CharacterPagination | null>(
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

  const loadCharacterCollection = async (
    pageNum: number = 1,
    searchParams?: Partial<CharacterApiResponse>
  ) => {
    const { characters } = await getCharacterCollection(pageNum, searchParams ?? {});
    setCollection(mapToCollection(characters.results, mapFromApiToVm));
    setPageInfo(characters.info);
  };

  return {
    characterCollection: collection,
    loadCharacterCollection,
    pageInfo,
    errorMessage,
    errorHandling: errorHandler,
  };
};
