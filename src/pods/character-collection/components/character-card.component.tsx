import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { CharacterEntityVm } from '../character-collection.vm';
import { CardActionArea } from '@mui/material';

interface Props {
  character: CharacterEntityVm;
  onVisit: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onVisit } = props;

  return (
    <Card sx={{maxWidth:"240px"}}>
      <CardActionArea onClick={() => onVisit(character.id)}>
        <CardHeader
          title={character.name}
          subheader={`${character.status} - ${character.species}`}
        />
            <CardMedia
              image={character.image}
              title={character.name}
              style={{ height: 0, paddingTop: '100%' }}
            />
      </CardActionArea>
    </Card>
  );
};
