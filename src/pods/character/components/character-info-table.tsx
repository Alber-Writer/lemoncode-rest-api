import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { Character } from '../character.vm';

export interface CharacterInfoTableProps {
  character: Character;
}

export const CharacterInfoTable: React.FC<CharacterInfoTableProps> = ({
  character,
}: CharacterInfoTableProps) => {
  const originUrl = character.origin.id ?? '#';
  const locationUrl = character.location.id ?? '#';
  return (
    <Table sx={{ minWidth: 280 }} aria-label="simple table">
      <TableBody>
        <TableRow>
          <TableCell>Status</TableCell>
          <TableCell>{character.status}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Species</TableCell>
          <TableCell>{character.species}</TableCell>
        </TableRow>
        {character.type && (
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>{character.type}</TableCell>
          </TableRow>
        )}

        <TableRow>
          <TableCell>Gender</TableCell>
          <TableCell>{character.gender}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Origin</TableCell>
          <TableCell>
            <Link to={linkRoutes.viewLocation(`${originUrl}`)}>
              {character.origin.name}
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Last known Location</TableCell>
          <TableCell>
            <Link to={linkRoutes.viewLocation(`${locationUrl}`)}>
              {character.location.name}
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
