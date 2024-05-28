import React from 'react';
import Button from '@mui/material/Button';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Location } from './location.vm';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  Typography,
} from '@mui/material';
import { CharacterLookup } from 'pods/character-lookup/character-lookup';
import { ReturnButton } from 'common/components';

interface Props {
  location: Location;
}

export const LocationComponent: React.FunctionComponent<Props> = (props) => {
  const { location } = props;

  return (
    <Box>
      <Box display={'flex'} gap={3} justifyContent={'space-between'}>
        <Box gap={2} mb={3}>
          <Typography variant="h1" fontSize={50} marginBottom={3}>
            {location.name}
          </Typography>
          <Typography variant="h4">
            Dimension:{` ${location.dimension}`}
          </Typography>
        </Box>
        <ReturnButton/>
      </Box>

      <Box display={'flex'} gap={3} justifyContent={'start'}>
        {location.residents.length <= 0 ? (
          <Typography variant="h6">There are no characters in this location</Typography>
        ) : (
          <Card sx={{ flexBasis: '50%', maxWidth: '800px' }}>
            <CardHeader title="Characters appearing in this location" />
            <CardContent sx={{ overflowY: 'auto', maxHeight: '450px' }}>
              <Table>
                <TableBody>
                  <CharacterLookup initialList={location.residents} />
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};
