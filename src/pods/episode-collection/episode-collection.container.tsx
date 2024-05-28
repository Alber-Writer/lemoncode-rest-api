import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, CircularProgress, Typography } from '@mui/material';

import { linkRoutes } from 'core/router';
import { useEpisodesCollection } from './episode-collection.hook';
import { EpisodeCollectionComponent } from './episode-collection.component';
import { Pagination } from 'common/components';
import { useURLInfo } from 'common/hooks';

export const EpisodeCollectionContainer = () => {
  const {
    episodesCollection,
    loadEpisodesCollection,
    pageInfo,
    errorMessage: apiErrorMessage,
    errorHandling: apiErrorHandling,
  } = useEpisodesCollection();
  const navigate = useNavigate();

  const { path, urlSearchPageNum, getSearchFilters } = useURLInfo();
  React.useEffect(() => {
    loadEpisodesCollection(urlSearchPageNum, getSearchFilters());
  }, [path]);

  const handleVisit = (id: number) => {
    navigate(linkRoutes.viewEpisode(id.toString()));
  };

  const { nextStep } = apiErrorHandling();

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'45px'}>
      <Typography variant='h4'>Episodes List</Typography>
      {apiErrorMessage && (
        <>
          <Box sx={{ backgroundColor: 'crimson', p: '1rem' }} display={'flex'} gap={'1rem'} alignItems={'center'} borderRadius={'0.5rem'}>
            <Typography color={'white'} variant='subtitle1'>{apiErrorMessage}</Typography>
            <Button
              variant="contained"
              onClick={() => nextStep()}
            >
              Go to Episodes section
            </Button>
          </Box>
        </>
      )}

      {!episodesCollection.length && !apiErrorMessage ? (
        <CircularProgress />
      ) : (
        <EpisodeCollectionComponent
          episodeCollection={episodesCollection}
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
