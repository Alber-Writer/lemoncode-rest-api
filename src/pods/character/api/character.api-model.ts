import { Character as ImportedCharacterType } from 'common/interfaces/rick-and-morty.api.types';
export interface Character
  extends Omit<ImportedCharacterType, 'origin' | 'location' | 'episode'> {
  location: { id: string; name: string };
  origin: { id: string; name: string };
  episode: {
    id: string;
    name: string;
    episode: string;
  }[];
}
