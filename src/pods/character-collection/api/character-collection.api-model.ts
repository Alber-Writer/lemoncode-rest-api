import { Character, Info } from 'common/interfaces/rick-and-morty.api.types';

export interface CharacterEntityApi extends Character {}

export interface CharacterPagination {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterApiResponse {
  info: CharacterPagination;
  results: CharacterEntityApi[];
}
