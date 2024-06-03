export interface CharacterPagination {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
interface CharacterLocation {
  name: string
}
export interface CharacterEntityVm{
  id: number
  name: string
  image: string
  species: string
  status: 'Dead' | 'Alive' | 'unknown'
  origin: CharacterLocation
}


