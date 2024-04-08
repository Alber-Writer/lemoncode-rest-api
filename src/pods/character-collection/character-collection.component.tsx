import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { CharacterPagination } from './api';

interface Props {
  pageInfo: CharacterPagination;
  characterCollection: CharacterEntityVm[];
  onView: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onView, pageInfo } = props;

  return (
    <div className={classes.root}>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onVisit={onView} />
          </li>
        ))}
      </ul>
      <div>Pagination:
          {JSON.stringify(pageInfo)}
          {/* Seguir... implementar tu componente de paginación */}
      </div>
    </div>
  );
};
