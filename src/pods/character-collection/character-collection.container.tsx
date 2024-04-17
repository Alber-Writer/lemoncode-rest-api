import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { Pagination } from 'common/components';
import { useURLInfo } from 'common/hooks';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection, pageInfo } =
    useCharacterCollection();
  const navigate = useNavigate();

  const {path, urlSearchPageNum} = useURLInfo()

  React.useEffect(() => {
    loadCharacterCollection(urlSearchPageNum);
  }, [path]);

  const handleVisit = (id: number) => {
    navigate(linkRoutes.viewCharacter(id.toString()));
  };

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'45px'}>
      {!characterCollection.length ? (
        'Loading...'
      ) : (
        <CharacterCollectionComponent
          characterCollection={characterCollection}
          onView={handleVisit}
        />
      )}

      <div>
        {pageInfo && (
          <Pagination
            pagesQty={pageInfo.pages}
            nextPage={pageInfo.next}
            prevPage={pageInfo.prev}
          />
        )}
      </div>
    </Box>
  );
};
