import React from 'react';
import {
  Box,
  Link as MuiLink,
  TableCell,
  TableRow,
  Typography
} from '@mui/material';
import { useCharacterCollection } from 'pods/character-collection/character-collection.hook';
import { Link } from 'react-router-dom';
import { linkRoutes } from 'core/router';


export const LookUpSelector = ({ initialList, path }) => {
  const [list, setList] = React.useState<string[]>([...initialList]);
  const {
    characterCollection, loadCharacterCollection, errorMessage: apiErrorMessage, errorHandling: apiErrorHandling,
  } = useCharacterCollection();



  React.useEffect(() => {
    setList((list) => list.reduce(
      (acc, currentKey) => [...acc, extractCharacterList(currentKey)],
      []
    )
    );
    loadCharacterCollection(1, list.join(',')); //
  }, []);
  //Pasar a business
  const extractIDFromPath = (path: string) => {
    const exp = new RegExp(path + '/(d{1,3})??(.*)$');
    return function (url: string) {
      const match = url.match(exp) ? url.match(exp)[2] : undefined;
      return match;
    };
  };
  const extractCharacterList = extractIDFromPath(path);

  return (
    <>
      {characterCollection.map((char) => (
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
                  }} />
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
