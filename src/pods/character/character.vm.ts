interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}
interface CharacterLocation {
  name: string;
  id: string;
}
export interface EpisodeLookUp {
  id: string;
  name: string;
  episode: string;
}
export interface Character extends ResourceBase {
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: EpisodeLookUp[];
}

export const createEmptyCharacter = (): Character => ({
  id: 1,
  name: '',
  status: 'unknown',
  species: '',
  type: '',
  gender: 'unknown',
  origin: {
    name: '',
    id: '',
  },
  location: {
    name: '',
    id: '',
  },
  image: '',
  episode: [{ episode: '', id: '', name: '' }],
  url: '',
  created: '',
});
