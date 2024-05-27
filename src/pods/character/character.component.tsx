import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Character } from './character.vm';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { EpisodeLookup } from 'pods/episode-lookup';
import { Link } from 'react-router-dom';
import { extractIDFromPath } from 'common/business';
import { linkRoutes } from 'core/router';
import { CONSTANTS, ENDPOINTS_DEF } from 'core/env';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const navigate = useNavigate();
  const locationLink = extractIDFromPath(CONSTANTS.API_BASE_URL + ENDPOINTS_DEF.LOCATION);
  const originUrl = locationLink(character.origin.url) ?? '#';
  const locationUrl = locationLink(character.location.url) ?? '#';

  return (
    <Box>
      <Box display={'flex'} gap={3} justifyContent={'space-between'}>
        <Typography variant="h1" fontSize={50} marginBottom={3}>
          {character.name}
        </Typography>

        <Button sx={{alignSelf:'flex-start'}} variant="contained" onClick={() => navigate(-1)}>
          <KeyboardReturnIcon />
          <Box margin={'5px'}>Return</Box>
        </Button>
      </Box>

      <Box display={'flex'} gap={3} justifyContent={'start'}>
        <Card sx={{ flexBasis: '33%', maxWidth: '600px' }}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          ></CardMedia>
          <CardContent>
            <Table sx={{ minWidth: 280 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell>Status</TableCell>
                  <TableCell>{character.status}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Species</TableCell>
                  <TableCell>{character.species}</TableCell>
                </TableRow>
                {character.type && (
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>{character.type}</TableCell>
                  </TableRow>
                )}

                <TableRow>
                  <TableCell>Gender</TableCell>
                  <TableCell>{character.gender}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Origin</TableCell>
                  <TableCell><Link to={linkRoutes.viewLocation(`${originUrl}`)}>{character.origin.name}</Link></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Last known Location</TableCell>
                  <TableCell>
                  <Link to={linkRoutes.viewLocation(`${locationUrl}`)}>{character.location.name}</Link></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {character.episode && (
          <Card sx={{ flexBasis: '33%', maxWidth: '600px' }}>
            <CardHeader title="Episodes in which this character appeared:" />
            <CardContent sx={{ overflowY: 'auto', maxHeight: '450px' }}>
              <Table>
                <TableBody>
                <EpisodeLookup initialList={character.episode}/>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};
