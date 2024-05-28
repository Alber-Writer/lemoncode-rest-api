import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyLocation, Location } from './location.vm';
import { mapLocationFromApiToVm } from './location.mappers';
import { LocationComponent } from './location.component';
import { CircularProgress } from '@mui/material';

export const LocationContainer: React.FunctionComponent = (props) => {
  const [location, setLocation] = React.useState<Location>(
    createEmptyLocation()
  );
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const { id } = useParams<{ id: string }>();

  const handleLoadLocation = async () => {
    setLoading(true);
    try {
      const apiLocation = await api.getLocation(parseInt(id));
      setLocation(mapLocationFromApiToVm(apiLocation));
      setLoading(false);
    } catch (error) {
      setError('Location not found');
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (id) handleLoadLocation();
  }, []);

  return (
    <>
      {error ? error : ''}
      {loading ? <CircularProgress /> : <LocationComponent location={location} />}
    </>
  );
};
