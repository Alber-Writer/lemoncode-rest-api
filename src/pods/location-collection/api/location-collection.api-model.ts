import { Location } from 'common/interfaces/rick-and-morty.api.types';

export interface LocationEntityApi extends Omit<Location, 'created' | 'residents' | 'url'> {}

export interface LocationPagination {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface LocationApiResponse {
  info: LocationPagination;
  results: LocationEntityApi[];
}
