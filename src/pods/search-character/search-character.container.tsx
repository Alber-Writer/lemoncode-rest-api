import React from 'react';
import { Form as FormikForm, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Divider } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { SelectComponent, TextFieldComponent } from 'common/components/form';
import { useURLInfo } from 'common/hooks';
import { linkRoutes } from 'core/router';
import { SearchButton } from './components/formikSearchButton';
import { genderOptions, searchValues, speciesOptions } from './search-character.business';

export const SearchCharacter = () => {
  const navigate = useNavigate();
  const { path, getSearchQueryParam, getSearchFilters } = useURLInfo();

  const validateFields = (values: Partial<typeof searchValues>) => {
    const commonTextRegex = /^[A-Z0-9._\s]{1,}$|(^$)/i;
    return Object.keys(values).reduce((acc, current) => {
      if (commonTextRegex.test(values[current])) return acc;
      return { ...acc, [current]: 'Invalid Input' }; //errors{}
    }, {});
  };

  const getUrlSearchValues = React.useMemo(() => {
    const commonTextRegex = /^[A-Z0-9._\s]{1,}$|(^$)/i;
    return Object.keys(searchValues).reduce((acc, current) => {
      let param = getSearchQueryParam(path.search, searchValues[current]) ?? '';
      if (!commonTextRegex.test(param)) param = '';
      return { ...acc, [current]: param };
    }, {});
  }, [path]);

  const resetForm = () => {
    navigate(`${linkRoutes.characterCollection}`);
  };

  return (
    <>
      <Formik
        initialValues={getUrlSearchValues}
        validate={validateFields}
        enableReinitialize={true}
        onSubmit={(values: typeof searchValues, { setSubmitting }) => {
          const query = Object.keys(values).reduce((acc, currentKey, i) => {
            if (values[currentKey]) {
              return [...acc, `${currentKey}=${values[currentKey]}`];
            }
            return acc;
          }, []).join('&');
          setSubmitting(false);
          if (query === getSearchFilters()) return;
          navigate(`${linkRoutes.characterCollection}?page=1&${query}`);
        }}
      >
        {({ isSubmitting }) => (
          <FormikForm onReset={resetForm}>
            <Box
              display={'grid'}
              gridTemplateColumns={'repeat(auto-fill, minmax(250px, 1fr))'}
              columnGap={'1rem'}
            >
              <TextFieldComponent
                sx={{ gridColumn: '1/-1' }}
                label="Name"
                name="name"
                variant="outlined"
                size="small"
              />
              <SelectComponent
                label="Status"
                name="status"
                size="small"
                items={speciesOptions}
              />
              <TextFieldComponent
                label="Species"
                name="species"
                variant="outlined"
                size="small"
              />
              <TextFieldComponent
                label="Type"
                name="type"
                variant="outlined"
                size="small"
              />
              <SelectComponent
                label="Gender"
                name="gender"
                size="small"
                defaultValue={[0]}
                items={genderOptions}
              />
            </Box>
            <Box display={'flex'} gap={'1rem'} mb={'2rem'}>
              <SearchButton props={{ isSubmitting }} />
              <Button
                type="reset"
                disabled={isSubmitting}
                variant="outlined"
                sx={{ mt: '1rem' }}
              >
                <ClearIcon />
                Reset
              </Button>
            </Box>
          </FormikForm>
        )}
      </Formik>
      <Divider sx={{ marginBottom: '2rem' }} />
    </>
  );
};
