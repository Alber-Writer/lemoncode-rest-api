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

import { EpisodeLookUp } from 'pods/character/character.vm';

interface Props{
  initialList:EpisodeLookUp[],
}

export const EpisodeLookup:React.FC<Props> = ({ initialList }:Props) => {
  const [collection, setCollection] = React.useState(initialList)
  React.useEffect(()=>{
    setCollection(initialList)
  }, [initialList])
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
