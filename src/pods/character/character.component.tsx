import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Lookup } from 'common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  // cities: Lookup[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  // const { character, cities, onSave } = props;
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          {/* <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="address" label="Address" />
          <RatingComponent name="rating" max={5} /> */}
          {/* <SelectComponent name="city" label="City" items={cities} /> */}
          {/* <TextFieldComponent
            name="description"
            label="Description"
            multiline={true}
            rows={3}
          /> */}

{/* <SelectComponent name="status" label="Status" items={cities} /> */}
<TextFieldComponent name="species" label="species" />
<TextFieldComponent name="type" label="type" />
{/* <TextFieldComponent name="gender" label="gender" /> */}
{/*<TextFieldComponent name="origin" label="origin" />*/}{/*name and url. Both string*/}
{/*<TextFieldComponent name="location" label="location" />*/}{/*name and url. Both string*/}
<TextFieldComponent name="image" label="image" />
{/* <TextFieldComponent name="episode" label="episode" /> */}



          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
// export interface Character extends ResourceBase {
//   status: 'Dead' | 'Alive' | 'unknown'
//   species: string
//   type: string
//   gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
//   origin: CharacterLocation
//   location: CharacterLocation
//   image: string
//   episode: string[]
// }
