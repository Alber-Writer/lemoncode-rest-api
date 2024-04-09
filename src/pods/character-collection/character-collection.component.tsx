import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { CharacterPagination } from './api';
import { Pagination } from '../../common/components/pagination/pagination';

interface Props {
  characterCollection: CharacterEntityVm[];
  onView: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onView } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onVisit={onView} />
          </li>
        ))}
      </ul>

    </div>
  );
};



