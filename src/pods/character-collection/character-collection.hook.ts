import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterPagination, getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [pageInfo, setPageInfo] = React.useState<CharacterPagination | null>(
    null
  );
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  // TODO: add CharacterPagination VM
  const navigate = useNavigate();

  //TODO: improve error handling in each case
  const errorHandling = () => {
    const displayErrorMessage = () => {
      setErrorMessage('Characters not found.');
    };
    const removeErrorMessage = () => {
      setErrorMessage('');
    };

    const nextStep = () => {
      removeErrorMessage();
      const visitCharacters = navigate(linkRoutes.characterCollection);
      return { visitCharacters };
    };

    return { displayErrorMessage, nextStep, removeErrorMessage };
  };

  const loadCharacterCollection = (
    pageNum: number = 1,
    searchParams: string = ''
  ) => {
    getCharacterCollection(pageNum, searchParams)
      .then((result) => {
        errorHandling().removeErrorMessage();
        const { results, info } = result;
        setPageInfo(info);
        setCharacterCollection(mapToCollection(results, mapFromApiToVm));
      })
      .catch((error) => {
        //TODO: improve error handling in each case
        errorHandling().displayErrorMessage();
      });
  };

  return {
    characterCollection,
    loadCharacterCollection,
    pageInfo,
    errorMessage,
    errorHandling,
  };
};
