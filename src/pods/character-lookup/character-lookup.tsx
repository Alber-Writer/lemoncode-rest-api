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
import { mapCharacterFromApiToVm } from 'pods/character/character.mappers';
import { ENDPOINTS_DEF } from 'core/env';

interface Props{
  initialList:string[],
}

export const CharacterLookup:React.FC<Props> = ({ initialList }:Props) => {
  const { collection, loadCollection } = useApiSpecificCollection({
    mapFromApiToVm: mapCharacterFromApiToVm,
    endPoint: 'CHARACTER',
  });
  const extractEpisodeList = extractIDFromPath(ENDPOINTS_DEF.CHARACTER);
  React.useEffect(() => {
    const specificList = initialList.reduce(
      (acc:string[], currentKey:string) => [...acc, extractEpisodeList(currentKey)],
      []
    );

    loadCollection(specificList.join(','));
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
