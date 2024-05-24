import { Location as ImportedLocationType } from 'common/interfaces/rick-and-morty.api.types';
export interface Location extends ImportedLocationType {}

export const createEmptyLocation = (): Location => ({
  id: 0,
  name: '',
  url: '',
  created: '',
  dimension: '',
  residents: [],
  type: ''
});
