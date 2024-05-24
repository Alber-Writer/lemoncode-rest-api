import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyLocation, Location } from './location.vm';
import { mapLocationFromApiToVm, mapLocationFromVmToApi } from './location.mappers';
import { LocationComponent } from './location.component';

export const LocationContainer: React.FunctionComponent = (props) => {
  const [location, setLocation] = React.useState<Location>(createEmptyLocation());
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadLocation = async () => {
    try{
      const apiLocation = await api.getLocation(parseInt(id));
      setLocation(mapLocationFromApiToVm(apiLocation));
    }catch(error){
      alert('Location not found')
    }
  };

  React.useEffect(() => {
    if (id) {
      handleLoadLocation();
    }
  }, []);

  const handleSave = async (location: Location) => {
    const apiLocation = mapLocationFromVmToApi(location);
    const success = await api.saveLocation(apiLocation);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save location');
    }
  };
  return <LocationComponent location={location} onSave={handleSave} />;
};
