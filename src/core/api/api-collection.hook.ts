import * as React from 'react';

import { mapToCollection } from 'common/mappers';
import { useNavigate } from 'react-router-dom';
import { LinkRoutes, switchRoutes } from 'core/router';

import { CONSTANTS, ENDPOINTS_DEF } from 'core/env';
import { getCollection } from './api/get-general-collection';

export const baseUrl = CONSTANTS.API_BASE_URL;

export interface StandardApiPagination {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export type MapFromApiToVm<AM, VM> = (AM: AM) => VM;

export const useGeneralApiCollection = <AM, VM>(config: {
  mapFromApiToVm: MapFromApiToVm<AM, VM>;
  escapeErrorLink: keyof LinkRoutes;
  endPoint: keyof typeof ENDPOINTS_DEF;
}) => {
  const { mapFromApiToVm, escapeErrorLink, endPoint } = config;
  const [collection, setCollection] = React.useState<VM[]>([]);
  const [pageInfo, setPageInfo] = React.useState<StandardApiPagination | null>(
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
      const visitPage = navigate(switchRoutes[escapeErrorLink]);
      return { visitPage };
    };

    return { displayErrorMessage, nextStep, removeErrorMessage };
  };

  const loadCollection = (pageNum: number = 1, searchParams: string = '') => {
    getCollection<AM>(pageNum, searchParams, endPoint)
      .then((result) => {
        errorHandler().removeErrorMessage();
        const { results, info } = result;
        setPageInfo(info);
        setCollection(mapToCollection(results, mapFromApiToVm));
      })
      .catch((error) => {
        errorHandler().displayErrorMessage();
      });
  };

  return {
    collection,
    loadCollection,
    pageInfo,
    errorMessage,
    errorHandler,
  };
};

export interface ApiResponse<T> {
  info: StandardApiPagination;
  results: T[];
}
