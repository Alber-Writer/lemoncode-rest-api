import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import { EpisodeEntityVm } from '../episode-collection.vm';
import {
  Box,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';

interface Props {
  episode: EpisodeEntityVm;
  onVisit: (id: number) => void;
}

export const EpisodeCard: React.FunctionComponent<Props> = (props) => {
  const { episode, onVisit } = props;

  const CHIP_COLORS_PER_SEASON = {
    S01: 'secondary',
    S02: 'primary',
    S03: 'info',
    S04: 'secondary',
    S05: 'primary',
    default: 'default',
  };

  const applyChipColor = (str: string = '') => {
    const expr = /^S\d{2}/i;
    const result = expr.exec(str) ? expr.exec(str)[0] : undefined;
    return CHIP_COLORS_PER_SEASON[result] || CHIP_COLORS_PER_SEASON.default;
  };

  return (
    <Card sx={{ maxWidth: '840px' }}>
      <CardActionArea onClick={() => onVisit(episode.id)}>
        <CardContent>
          <Typography variant="h6" mb={1}>{episode.name}</Typography>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <Chip color={applyChipColor(episode.episode)} label={episode.episode} size="small" />
            <Typography variant="body2">Air Date:{` ${episode.air_date}`}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
