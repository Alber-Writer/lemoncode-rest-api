import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import {
  mapCharacterFromApiToVm,
} from './character.mappers';
import { CharacterComponent } from './character.component';
import { Box, Typography } from '@mui/material';
import { ReturnButton } from '../../common/components/return-button/return-button';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const { id } = useParams<{ id: string }>();

  const handleLoadCharacter = async () => {
    try {
      const apiCharacter = await api.getCharacter(parseInt(id));
      setCharacter(mapCharacterFromApiToVm(apiCharacter));
    } catch (error) {
      setErrorMessage('Character not found');
    }
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  return (
    <>
      {errorMessage ? (
        <Box gap={5} display={'flex'} justifyContent={'space-evenly'}>
          <Typography variant="h4" color={'crimson'}>
            {errorMessage}
          </Typography>
          <ReturnButton />
        </Box>
      ) : (
        <CharacterComponent character={character}/>
      )}
    </>
  );
};
