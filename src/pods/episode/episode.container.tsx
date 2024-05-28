import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyEpisode, Episode } from './episode.vm';
import {
  mapEpisodeFromApiToVm,
  mapEpisodeFromVmToApi,
} from './episode.mappers';
import { EpisodeComponent } from './episode.component';
import { CircularProgress } from '@mui/material';

export const EpisodeContainer: React.FunctionComponent = (props) => {
  const [episode, setEpisode] = React.useState<Episode>(createEmptyEpisode());
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const { id } = useParams<{ id: string }>();

  const handleLoadEpisode = async () => {
    setLoading(true);
    try {
      const apiEpisode = await api.getEpisode(parseInt(id));
      setEpisode(mapEpisodeFromApiToVm(apiEpisode));
      setLoading(false);
    } catch (error) {
      setError('Episode not found');
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (id) handleLoadEpisode();
  }, []);

  return (
    <>
      {error ? error : ''}
      {loading ? <CircularProgress /> : <EpisodeComponent episode={episode} />}
    </>
  );
};
