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

import { CharactersLookUp } from 'pods/episode/episode.vm';

interface Props{
  initialList:CharactersLookUp[],
}

export const CharacterLookup:React.FC<Props> = ({ initialList }:Props) => {
  const [collection, setCollection] = React.useState<CharactersLookUp[]>(initialList)
  React.useEffect(() => {
    setCollection(initialList)
  }, [initialList]);

  return (
    <>
      {collection.map((char) => (
        <TableRow key={char.id}>
          <TableCell>
            <MuiLink
              underline={'hover'}
              component={Link}
              to={linkRoutes.viewCharacter(char.id.toString())}
            >
              <Box display={'flex'} gap={1} alignItems={'center'}>
                <img
                  src={char.image}
                  style={{
                    maxWidth: '40px',
                    height: 'auto',
                    borderRadius: '100%',
                  }}
                />
                <Typography variant="subtitle1">{char.name}</Typography>
                Status: {char.status} | Specie: {char.species}
              </Box>
            </MuiLink>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
