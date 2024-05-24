import { Episode as ImportedEpisodeType } from 'common/interfaces/rick-and-morty.api.types';
export interface Episode extends ImportedEpisodeType {}

export const createEmptyEpisode = (): Episode => ({
  id: 0,
  name: '',
  url: '',
  created: '',
  air_date: '',
  episode: '',
  characters: [''],
});
