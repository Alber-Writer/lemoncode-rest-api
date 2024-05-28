import React from 'react';
import { Formik, Form } from 'formik';
import { Character } from './character.vm';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { EpisodeLookup } from 'pods/episode-lookup';
import { CharacterInfoTable } from './components/character-info-table';
import { EpisodesContainer } from './components/episodes-container';
import { ReturnButton } from '../../common/components/return-button/return-button';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  return (
    <Box>
      <Box display={'flex'} gap={3} justifyContent={'space-between'}>
        <Typography variant="h1" fontSize={50} marginBottom={3}>
          {character.name}
        </Typography>
        <ReturnButton />
      </Box>

      <Box display={'flex'} gap={3} justifyContent={'start'}>
        <Card sx={{ flexBasis: '33%', maxWidth: '600px' }}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          ></CardMedia>
          <CardContent>
            <CharacterInfoTable character={character} />
          </CardContent>
        </Card>

        {character.episode && (
          <EpisodesContainer>
            <EpisodeLookup initialList={character.episode} />
          </EpisodesContainer>
        )}
      </Box>
    </Box>
  );
};
