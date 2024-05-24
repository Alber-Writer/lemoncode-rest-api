import * as React from 'react';
import Card from '@mui/material/Card';
import { LocationEntityVm } from '../location-collection.vm';
import {
  Box,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';

interface Props {
  location: LocationEntityVm;
  onVisit: (id: number) => void;
}

export const LocationCard: React.FunctionComponent<Props> = (props) => {
  const { location, onVisit } = props;

  return (
    <Card sx={{ maxWidth: '840px' }}>
      <CardActionArea onClick={() => onVisit(location.id)}>
        <CardContent>
          <Typography variant="h6" mb={1}>{location.name}</Typography>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <Typography variant="body2">Type:{` ${location.type}`}</Typography>
            <Typography variant="body2">Dimension:{` ${location.dimension}`}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
