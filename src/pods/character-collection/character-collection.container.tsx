import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection, pageInfo } =
    useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleVisit = (id: number) => {
    navigate(linkRoutes.viewCharacter(id.toString()));
  };

  return (
    <CharacterCollectionComponent
      pageInfo={pageInfo}
      characterCollection={characterCollection}
      onView={handleVisit}
    />
  );
};
