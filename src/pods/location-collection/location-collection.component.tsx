import * as React from 'react';
import { LocationEntityVm } from './location-collection.vm';
import { LocationCard } from './components/location-card.component';
import * as classes from './location-collection.styles';

interface Props {
  locationCollection: LocationEntityVm[];
  onView: (id: number) => void;
}

export const LocationCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { locationCollection, onView } = props;
  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {locationCollection.map((character) => (
          <li key={character.id}>
            <LocationCard location={character} onVisit={onView} />
          </li>
        ))}
      </ul>

    </div>
  );
};



