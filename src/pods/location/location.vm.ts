interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}
export interface Residents {
  id: string;
  image: string;
  name: string;
  status: string;
  species: string;
}
export interface Location extends ResourceBase {
  type: string;
  dimension: string;
  residents: Residents[];
}

export const createEmptyLocation = (): Location => ({
  id: 0,
  name: '',
  url: '',
  created: '',
  dimension: '',
  residents: [
    {
      id: '',
      image: '',
      name: '',
      status: '',
      species: '',
    },
  ],
  type: '',
});
