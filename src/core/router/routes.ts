import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  episodeCollection: string;
  viewCharacter: string;
  viewEpisode: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters/',
  viewCharacter: '/characters/:id',
  episodeCollection: '/episodes/',
  viewEpisode: '/episodes/:id',
};

type NavigationFunction = (id: string) => string;

export interface LinkRoutes extends Omit<SwitchRoutes, 'viewCharacter' | 'viewEpisode'> {
  viewCharacter: NavigationFunction;
  viewEpisode: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  viewCharacter: (id) => generatePath(switchRoutes.viewCharacter, { id }),
  viewEpisode: (id) => generatePath(switchRoutes.viewEpisode, { id }),
};
