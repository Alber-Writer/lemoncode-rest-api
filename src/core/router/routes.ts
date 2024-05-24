import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  viewCharacter: string;
  episodeCollection: string;
  viewEpisode: string;
  locationCollection: string;
  viewLocation: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters/',
  viewCharacter: '/characters/:id',
  episodeCollection: '/episodes/',
  viewEpisode: '/episodes/:id',
  locationCollection: '/locations/',
  viewLocation: '/locations/:id',
};

type NavigationFunction = (id: string) => string;

export interface LinkRoutes extends Omit<SwitchRoutes, 'viewCharacter' | 'viewEpisode' | 'viewLocation'> {
  viewCharacter: NavigationFunction;
  viewEpisode: NavigationFunction;
  viewLocation: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  viewCharacter: (id) => generatePath(switchRoutes.viewCharacter, { id }),
  viewEpisode: (id) => generatePath(switchRoutes.viewEpisode, { id }),
  viewLocation: (id) => generatePath(switchRoutes.viewLocation, { id }),
};
