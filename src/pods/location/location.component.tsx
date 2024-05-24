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
import { useNavigate } from 'react-router-dom';
import { LookUpSelector } from 'pods/lookup-selector/LookUpSelector';

interface Props {
  location: Location;
  onSave: (location: Location) => void;
}

export const LocationComponent: React.FunctionComponent<Props> = (props) => {
  const { location } = props;
  const navigate = useNavigate();

  return (
    <Box>
      <Box display={'flex'} gap={3} justifyContent={'space-between'}>
        <Typography variant="h1" fontSize={50} marginBottom={3}>
          {location.name}
        </Typography>

        <Button
          sx={{ alignSelf: 'flex-start' }}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          <KeyboardReturnIcon />
          <Box margin={'5px'}>Return</Box>
        </Button>
      </Box>

      <Box display={'flex'} gap={3} justifyContent={'start'}>
        <Card sx={{ flexBasis: '33%', maxWidth: '600px' }}>
          <CardContent>
            <Typography variant="h6" mb={1}>
              {location.name}
            </Typography>
            <Box display={'flex'} alignItems={'center'} gap={1}>

              <Typography variant="body2">
                Air Date:{` ${location.dimension}`}
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {location.residents && (
          <Card sx={{ flexBasis: '33%', maxWidth: '600px' }}>
            <CardHeader title="Characters appearing in this location" />
            <CardContent sx={{ overflowY: 'auto', maxHeight: '450px' }}>
              <Table>
                <TableBody>
                  <LookUpSelector initialList={location.residents} path={'character'} />
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};


