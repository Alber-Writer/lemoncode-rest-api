import { Episode as ImportedEpisodeType } from 'common/interfaces/rick-and-morty.api.types';

interface CharactersLookUp{
    id:string;
    image:string;
    name:string;
    status:string;
    species: string;
}
export interface Episode extends Omit<ImportedEpisodeType, 'characters'> {
  characters: CharactersLookUp[];
}
