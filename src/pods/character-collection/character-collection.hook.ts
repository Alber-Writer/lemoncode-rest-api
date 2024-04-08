import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterPagination, getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [pageInfo, setPageInfo] = React.useState<CharacterPagination>({});
  // TODO: add CharacterPagination VM

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) => {
      const { results, info } = result;
      setPageInfo(info);
      setCharacterCollection(mapToCollection(results, mapFromApiToVm));
    });
  };

  return { characterCollection, loadCharacterCollection, pageInfo };
};
