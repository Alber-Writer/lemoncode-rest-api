import {Character as ImportedCharacterType} from 'common/interfaces/rick-and-morty.api.types'
export interface Character extends ImportedCharacterType{
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
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: [
    '',
  ],
  url: '',
  created: '',
});
