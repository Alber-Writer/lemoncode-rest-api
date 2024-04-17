import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterPagination, getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [pageInfo, setPageInfo] = React.useState<CharacterPagination | null>(
    null
  );
  // TODO: add CharacterPagination VM

  const loadCharacterCollection = (pageNum: number = 1) => {
    getCharacterCollection(pageNum)
      .then((result) => {
        const { results, info } = result;
        setPageInfo(info);
        setCharacterCollection(mapToCollection(results, mapFromApiToVm));
      })
      .catch((error) => {
        alert('An error ocurred. Please enter a valid page.');
        //TODO: improve error handling
      });
  };

  return { characterCollection, loadCharacterCollection, pageInfo };
};
