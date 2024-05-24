import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyEpisode, Episode } from './episode.vm';
import { mapEpisodeFromApiToVm, mapEpisodeFromVmToApi } from './episode.mappers';
import { EpisodeComponent } from './episode.component';

export const EpisodeContainer: React.FunctionComponent = (props) => {
  const [episode, setEpisode] = React.useState<Episode>(createEmptyEpisode());
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadEpisode = async () => {
    try{
      const apiEpisode = await api.getEpisode(parseInt(id));
      setEpisode(mapEpisodeFromApiToVm(apiEpisode));
    }catch(error){
      alert('Episode not found')
    }
  };

  React.useEffect(() => {
    if (id) {
      handleLoadEpisode();
    }
  }, []);

  const handleSave = async (episode: Episode) => {
    const apiEpisode = mapEpisodeFromVmToApi(episode);
    const success = await api.saveEpisode(apiEpisode);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save episode');
    }
  };
  return <EpisodeComponent episode={episode} onSave={handleSave} />;
};
