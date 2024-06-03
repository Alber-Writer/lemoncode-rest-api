import React from 'react';
import { switchRoutes } from 'core/router';
import { LocationPagination, getLocationCollection } from './api';
import { useNavigate } from 'react-router-dom';
import { LocationEntityVm } from './location-collection.vm';
import { mapToCollection } from 'common/mappers';
import { mapLocationFromApiToVm } from 'pods/location/location.mappers';

export const useLocationsCollection = () => {
  const [locationsCollection, setLocationsCollection] = React.useState<LocationEntityVm[]>([]);
  const [pageInfo, setPageInfo] = React.useState<LocationPagination | null>(
    null
  );
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const navigate = useNavigate();

  //TODO: improve error handling
  const errorHandler = () => {
    const displayErrorMessage = () => {
      setErrorMessage('Collection not found.');
    };
    const removeErrorMessage = () => {
      setErrorMessage('');
    };

    const nextStep = () => {
      removeErrorMessage();
      const visitPage = navigate(switchRoutes.locationCollection);
      return { visitPage };
    };

    return { displayErrorMessage, nextStep, removeErrorMessage };
  };

  const loadLocationsCollection = async (
    pageNum: number = 1,
  ) => {
    const {results:locations, info:pagination} = await getLocationCollection(pageNum);
    setLocationsCollection(mapToCollection(locations, mapLocationFromApiToVm))
    setPageInfo(pagination)
  };

  return {
    locationsCollection,
    loadLocationsCollection,
    pageInfo,
    errorMessage,
    errorHandling:errorHandler,
  };
};
