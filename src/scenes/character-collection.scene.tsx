import * as React from 'react';
import { AppLayout } from 'layouts';
import { CharacterCollectionContainer } from 'pods/character-collection';
import { SearchCharacter } from 'pods/search-character';

export const CharacterCollectionScene = () => (
  <AppLayout>
    <SearchCharacter/>
    <CharacterCollectionContainer />
  </AppLayout>
);
