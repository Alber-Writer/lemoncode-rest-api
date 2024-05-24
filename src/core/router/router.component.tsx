import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene, EpisodeCollectionScene, EpisodeScene, LocationCollectionScene, LocationScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.characterCollection} />}
        />
        <Route
          path={switchRoutes.characterCollection}
          element={<CharacterCollectionScene />}
        />
        <Route
          path={switchRoutes.viewCharacter}
          element={<CharacterScene />}
        />
        <Route
          path={switchRoutes.episodeCollection}
          element={<EpisodeCollectionScene />}
        />
        <Route
          path={switchRoutes.viewEpisode}
          element={<EpisodeScene />}
        />
        <Route
          path={switchRoutes.locationCollection}
          element={<LocationCollectionScene />}
        />
        <Route
          path={switchRoutes.viewLocation}
          element={<LocationScene />}
        />
        <Route
          path={'*'}
          element={<Navigate to={switchRoutes.characterCollection} />}
        />
      </Routes>
    </HashRouter>
  );
};
