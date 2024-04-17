import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { SearchCharacter } from 'pods/search-character/search-character.container';

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
      <SearchCharacter/>
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



