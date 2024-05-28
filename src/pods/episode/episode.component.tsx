import React from 'react';
import Button from '@mui/material/Button';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Episode } from './episode.vm';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Table,
  TableBody,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CharacterLookup } from 'pods/character-lookup/character-lookup';
import { ReturnButton } from 'common/components';

interface Props {
  episode: Episode;
}

export const EpisodeComponent: React.FunctionComponent<Props> = (props) => {
  const { episode } = props;
  const navigate = useNavigate();

  const chipColours = {
    S01: 'secondary',
    S02: 'primary',
    S03: 'info',
    S04: 'secondary',
    S05: 'primary',
    default: 'default',
  };

  const applyChipColor = (str: string = '') => {
    const exp = /^S\d{2}/i;
    const result = exp.exec(str) ? exp.exec(str)[0] : undefined;
    return chipColours[result] || chipColours.default;
  };

  return (
    <Box>
      <Box display={'flex'} gap={3} justifyContent={'space-between'}>
        <Typography variant="h1" fontSize={50} marginBottom={3}>
          {episode.name}
        </Typography>

        <ReturnButton/>
      </Box>

      <Box display={'flex'} gap={3} justifyContent={'start'}>
        <Card sx={{ flexBasis: '33%', maxWidth: '600px' }}>
          <CardContent>
            <Typography variant="h6" mb={1}>
              {episode.name}
            </Typography>
            <Box display={'flex'} alignItems={'center'} gap={1}>
              <Chip
                color={applyChipColor(episode.episode)}
                label={episode.episode}
                size="small"
              />
              <Typography variant="body2">
                Air Date:{` ${episode.air_date}`}
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {episode.episode.length <= 0 ? (
          <Typography variant="h6">There are no characters in this episode</Typography>
        ) : (
          <Card sx={{ flexBasis: '33%', maxWidth: '600px' }}>
            <CardHeader title="Characters appearing in this episode" />
            <CardContent sx={{ overflowY: 'auto', maxHeight: '450px' }}>
              <Table>
                <TableBody>
                  <CharacterLookup initialList={episode.characters} />
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};


