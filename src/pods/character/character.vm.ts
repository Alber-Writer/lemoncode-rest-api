interface ResourceBase {
  id: number
  name: string
  url: string
  created: string
}
interface CharacterLocation {
  name: string
  url: string
}
export interface Character extends ResourceBase {
  status: 'Dead' | 'Alive' | 'unknown'
  species: string
  type: string
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  origin: CharacterLocation
  location: CharacterLocation
  image: string
  episode: string[]
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


