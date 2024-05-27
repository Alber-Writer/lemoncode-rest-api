import React from 'react';
import {
  Box,
  Link as MuiLink,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { linkRoutes } from 'core/router';

import { extractIDFromPath } from 'common/business/extract-id-from-path';
import { useApiSpecificCollection } from 'core/api/api-specific-collection.hook';
import { mapEpisodeFromApiToVm } from 'pods/episode/episode.mappers';
import { ENDPOINTS_DEF } from 'core/env';

interface Props{
  initialList:string[],
}

export const EpisodeLookup:React.FC<Props> = ({ initialList }:Props) => {
  const { collection, loadCollection } = useApiSpecificCollection({
    mapFromApiToVm: mapEpisodeFromApiToVm,
    endPoint: 'EPISODE',
  });
  const extractCharacterList = extractIDFromPath(ENDPOINTS_DEF.EPISODE);
  React.useEffect(() => {
    const specificList = initialList.reduce(
      (acc:string[], currentKey:string) => [...acc, extractCharacterList(currentKey)],
      []
    );
    loadCollection(specificList.join(','));
  }, [initialList]);

  return (
    <>
      {collection.map((episode) => (
        <TableRow key={episode.id}>
          <TableCell>
            <MuiLink
              underline={'hover'}
              component={Link}
              to={linkRoutes.viewEpisode(episode.id.toString())}
            >
              <Box display={'flex'} gap={1} alignItems={'center'}>
                {episode.episode} |
                <Typography variant="subtitle1">{episode.name}</Typography>
              </Box>
            </MuiLink>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
