import * as apiModel from './api/episode.api-model';
import * as viewModel from './episode.vm';

export const mapEpisodeFromApiToVm = (
  episode: apiModel.Episode
): viewModel.Episode => ({
  ...episode,
  id: episode.id,
  name: episode.name,
  url: episode.url,
  created: episode.created,
  air_date: episode.air_date,
  episode: episode.episode,
  characters: episode.characters,
});

export const mapEpisodeFromVmToApi = (episode: viewModel.Episode): apiModel.Episode =>
  (({
    ...episode,
    id: episode.id,
    name: episode.name,
    url: episode.url,
    created: episode.created,
    air_date: episode.air_date,
    episode: episode.episode,
    characters: episode.characters,
  } as unknown) as apiModel.Episode);
