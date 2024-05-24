import * as apiModel from './api/location.api-model';
import * as viewModel from './location.vm';

export const mapLocationFromApiToVm = (
  location: apiModel.Location
): viewModel.Location => ({
  ...location,
  id: location.id,
  name: location.name,
  url: location.url,
  created: location.created,
  dimension: location.dimension,
  residents: location.residents,
  type:location.type
});

export const mapLocationFromVmToApi = (
  location: viewModel.Location
): apiModel.Location =>
  ({
    ...location,
    id: location.id,
    name: location.name,
    url: location.url,
    created: location.created,
    dimension: location.dimension,
    residents: location.residents,
    type:location.type
  });
