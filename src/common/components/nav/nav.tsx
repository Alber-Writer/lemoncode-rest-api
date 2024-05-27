import React from 'react';
import { Box, Link as MuiLink } from '@mui/material';
import { linkRoutes } from 'core/router';
import { Link, useMatch } from 'react-router-dom';
export const Nav: React.FC = () => {
  const pages = [
    { name: 'Characters', link: linkRoutes.characterCollection },
    { name: 'Episodes', link: linkRoutes.episodeCollection },
    { name: 'Locations', link: linkRoutes.locationCollection },
  ];
  return (
    <Box display={'flex'} gap={2} mx={4}>
      {pages.map((p) => {
        const isActive = useMatch({ path: p.link, end: false });
      return (
        <MuiLink color={isActive ? '#ffe200' : '#fff'} underline='hover' fontSize={'0.8rem'} textTransform={'uppercase'} component={Link} to={p.link} key={p.name}>
          {p.name}
        </MuiLink>
      )})}
    </Box>
  );
};
