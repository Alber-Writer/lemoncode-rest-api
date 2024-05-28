import React from 'react';
import {
  Card,
  CardContent,
  CardHeader, Table,
  TableBody
} from '@mui/material';

export function EpisodesContainer({ children }) {
  return (
    <Card sx={{ flexBasis: '33%', maxWidth: '600px' }}>
      <CardHeader title="Episodes in which this character appeared:" />
      <CardContent sx={{ overflowY: 'auto', maxHeight: '450px' }}>
        <Table>
          <TableBody>
            {children}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
