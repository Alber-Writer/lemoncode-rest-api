import { Episode } from 'common/interfaces/rick-and-morty.api.types';

export interface EpisodeEntityApi extends Episode {}

export interface EpisodePagination {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface EpisodeApiResponse {
  info: EpisodePagination;
  results: EpisodeEntityApi[];
}
