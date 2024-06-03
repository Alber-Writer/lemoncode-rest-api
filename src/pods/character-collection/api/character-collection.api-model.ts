import { Character, Info, Location } from 'common/interfaces/rick-and-morty.api.types';


interface Origin extends Pick<Location, 'name'>{};
export interface CharacterEntityApi extends Pick<Character, 'id' | 'name' | 'image' | 'species' | 'status'> {
  origin:Origin
}

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

