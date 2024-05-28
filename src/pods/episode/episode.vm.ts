interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}
export interface Episode extends ResourceBase {
  air_date: string;
  episode: string;
  characters: string[];
}

export const createEmptyEpisode = (): Episode => ({
  id: 0,
  name: '',
  url: '',
  created: '',
  air_date: '',
  episode: '',
  characters: [''],
});
