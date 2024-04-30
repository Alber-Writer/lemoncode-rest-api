import React from 'react';
import { getIn, connect } from 'formik';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const formikSearchButton = (props) => {
  const error = getIn(props.formik.errors, props.name);
  return (
    <Button
      disabled={props.isSubmitting || !!Object.keys(error).length}
      variant="contained"
      sx={{ mt: '1rem' }}
      type='submit'
    >
      <SearchIcon />
      Search
    </Button>
  );
};
export const SearchButton = connect(formikSearchButton);
