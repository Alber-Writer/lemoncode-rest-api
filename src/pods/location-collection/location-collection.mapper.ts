import * as apiModel from './api/location-collection.api-model';
import * as viewModel from './location-collection.vm';

export const mapFromApiToVm = (
  location: apiModel.LocationEntityApi
): viewModel.LocationEntityVm => ({
  id: location.id,
  name: location.name,
  type: location.type,
  dimension: location.dimension,
});
