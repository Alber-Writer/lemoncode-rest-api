import * as React from 'react';
import { mapToCollection } from 'common/mappers';
import { ENDPOINTS_DEF } from 'core/env';
import { getSpecificCollection } from './api/get-specific-collection';
import { MapFromApiToVm } from './api-collection.hook';

export const useApiSpecificCollection = <AM, VM>(config: {
  mapFromApiToVm: MapFromApiToVm<AM, VM>;
  endPoint: keyof typeof ENDPOINTS_DEF;
}) => {
  const { mapFromApiToVm, endPoint } = config;
  const [collection, setCollection] = React.useState<VM[]>([]);

  const [errorMessage, setErrorMessage] = React.useState<string>('');

  //TODO: improve error handling
  const errorHandler = () => {
    const displayErrorMessage = () => {
      setErrorMessage('Collection not found.');
    };
    const removeErrorMessage = () => {
      setErrorMessage('');
    };

    return { displayErrorMessage, removeErrorMessage };
  };

  const loadCollection = (collectionIds: string) => {
    getSpecificCollection<AM>(endPoint, collectionIds)
    .then((result) => {
        errorHandler().removeErrorMessage();
        setCollection(mapToCollection(result, mapFromApiToVm));
      })
      .catch((error) => {
        errorHandler().displayErrorMessage();
      });
  };

  return {
    collection,
    loadCollection,
    errorMessage,
    errorHandler,
  };
};
