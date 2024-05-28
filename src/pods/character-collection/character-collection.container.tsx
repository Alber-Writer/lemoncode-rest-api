import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, CircularProgress, Typography } from '@mui/material';

import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { Pagination } from 'common/components';
import { useURLInfo } from 'common/hooks';

export const CharacterCollectionContainer = () => {
  const {
    characterCollection,
    loadCharacterCollection,
    pageInfo,
    errorMessage: apiErrorMessage,
    errorHandling: apiErrorHandling,
  } = useCharacterCollection();
  const navigate = useNavigate();

  const { path, urlSearchPageNum, getSearchFilters } = useURLInfo();
  React.useEffect(() => {
    loadCharacterCollection(urlSearchPageNum, getSearchFilters());
  }, [path]);

  const handleVisit = (id: number) => {
    navigate(linkRoutes.viewCharacter(id.toString()));
  };

  const { nextStep } = apiErrorHandling();

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'45px'}>
      {apiErrorMessage && (
        <>
          <Box sx={{ backgroundColor: 'crimson', p: '1rem' }} display={'flex'} gap={'1rem'} alignItems={'center'} borderRadius={'0.5rem'}>
            <Typography color={'white'} variant='subtitle1'>{apiErrorMessage}</Typography>
            <Button
              variant="contained"
              onClick={() => nextStep()}
            >
              Go to Characters section
            </Button>
          </Box>
        </>
      )}

      {!characterCollection.length && !apiErrorMessage ? (
        <CircularProgress />
      ) : (
        <CharacterCollectionComponent
          characterCollection={characterCollection}
          onView={handleVisit}
        />
      )}

      <div>
        {pageInfo && pageInfo.pages > 1 && (
          <Pagination
            searchFilters={getSearchFilters()}
            pagesQty={pageInfo.pages}
            nextPage={pageInfo.next}
            prevPage={pageInfo.prev}
          />
        )}
      </div>
    </Box>
  );
};
