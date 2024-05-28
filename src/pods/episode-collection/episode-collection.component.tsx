import * as React from 'react';
import { EpisodeEntityVm } from './episode-collection.vm';
import { EpisodeCard } from './components/episode-card.component';
import * as classes from './episode-collection.styles';

interface Props {
  episodeCollection: EpisodeEntityVm[];
  onView: (id: number) => void;
}

export const EpisodeCollectionComponent: React.FC<Props> = (
  props
) => {
  const { episodeCollection, onView } = props;
  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {episodeCollection.map((character) => (
          <li key={character.id}>
            <EpisodeCard episode={character} onVisit={onView} />
          </li>
        ))}
      </ul>

    </div>
  );
};



