import { HighlightOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import { TextFieldComponent } from 'common/components';
import { FieldArray, Formik, Form as FormikForm } from 'formik';
import React, { useEffect } from 'react';
import { updateBestSentences } from '../api';
import SnackBarFeedback, { SnackBarFeedbackProps } from './snackbar-feedback';

interface Props {
  children?: React.ReactNode;
  bestSentences?: string[];
  characterId: number;
}

export const BestSentences: React.FC<Props> = (props: Props) => {
  const { bestSentences, characterId } = props;
  const [sentences, setSentences] = React.useState<string[]>([]);
  const [focus, setFocus] = React.useState<boolean>(false);
  const [feedback, setFeedback] = React.useState<SnackBarFeedbackProps>({
    message: '',
    msgType: 'success',
    triggers: 0,
  });
  const addFirstSentence = () => {
    setSentences(['...']);
  };
  useEffect(() => {
    setSentences([...bestSentences]);
  }, [bestSentences]);

  const handleUpdate = async (characterId: number, sentences: string[]) => {
    const call = await updateBestSentences(characterId, sentences);
    return call;
  };

  return (
    <>
      <Card sx={{ flexBasis: '33%', maxWidth: '600px' }}>
        <CardHeader title="Character Best Sentences:" />
        <CardContent sx={{ overflowY: 'auto', maxHeight: '500px' }}>
          {sentences.length <= 1 && !sentences[0] ? (
            <>
              <Typography mb={3}>
                This character has no sentences yet. Add one ;)
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={addFirstSentence}
              >
                Add sentence
              </Button>
            </>
          ) : (
            <Formik
              initialValues={{ sentences: [...sentences] }}
              enableReinitialize={true}
              onSubmit={(values, formikHelpers) => {
                const { sentences } = values;
                const save = handleUpdate(characterId, sentences);
                if (save) {
                  setFeedback((feedback) => ({
                    message: 'Sentences updated!',
                    msgType: 'error',
                    triggers: feedback.triggers + 1,
                  }));
                  setSentences(sentences);
                }
                formikHelpers.setSubmitting(false);
              }}
            >
              {({ values, isSubmitting, dirty }) => (
                <FormikForm>
                  <FieldArray name="sentences">
                    {({ remove, push }) => (
                      <>
                        <Box sx={{ overflowY: 'auto', maxHeight: '350px' }}>
                          {values.sentences.map((_s, index) => (
                            <Box
                              display={'flex'}
                              gap={3}
                              alignItems={'center'}
                              key={`values.sentences[${index}]`}
                            >
                              <TextFieldComponent
                                label={`Phrase ${index + 1}`}
                                name={`sentences[${index}]`}
                                variant="outlined"
                                size="small"
                                autoFocus={focus}
                                sx={{ maxWidth: '85%' }}
                              />
                              <HighlightOff
                                color="warning"
                                onClick={() => remove(index)}
                              />
                            </Box>
                          ))}
                        </Box>
                        <Box display={'flex'} gap={3} my={2}>
                          <Button
                            type="button"
                            variant="outlined"
                            color="secondary"
                            onClick={() => {
                              push('');
                              setFocus(true);
                            }}
                            disabled={isSubmitting}
                          >
                            + New Phrase
                          </Button>
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting || !dirty}
                          >
                            Save changes
                          </Button>

                          <Button
                            type="reset"
                            variant="outlined"
                            color="warning"
                            disabled={isSubmitting || !dirty}
                          >
                            Reset
                          </Button>
                        </Box>
                        <SnackBarFeedback
                          message={feedback.message}
                          msgType={feedback.msgType}
                          triggers={feedback.triggers}
                        />
                      </>
                    )}
                  </FieldArray>
                </FormikForm>
              )}
            </Formik>
          )}
        </CardContent>
      </Card>
    </>
  );
};

