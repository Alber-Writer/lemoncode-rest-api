import * as React from 'react';
import { AppLayout } from 'layouts';
import { EpisodeContainer } from 'pods/episode';

export const EpisodeScene = () => (
  <AppLayout>
    {<EpisodeContainer />}
  </AppLayout>
);
