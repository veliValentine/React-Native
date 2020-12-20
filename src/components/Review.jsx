import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import FormikTextInput from './FormikTextInput';

import theme from '../theme';

import { useHistory } from 'react-router-native';
import useCreateReview from '../hooks/useCreateReview';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexGrow: 0.1,
    justifyContent: 'space-evenly',
    backgroundColor: 'white'
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'grey',
    padding: 10
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const initialValues = {
  owner: '',
  repository: '',
  rating: null,
  review: '',
};

const validationSchema = yup.object().shape({
  owner: yup
    .string()
    .required('Repository name is required'),
  repository: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()//'Rating must be integer from 0 to 100'
    .typeError('Rating is required. It must be an integer from 0 to 100')
    .min(0)
    .max(100)
    .integer()
    .required('Rating is required'),
  review: yup
    .string(),
});

const ReviewForm = ({ onSubmit }) => (
  <View style={styles.container}>
    <FormikTextInput
      name='owner'
      placeholder='Repository owner name'
      autoCapitalize='none'
      testID="ownerInput"
      style={styles.textInput}
    />

    <FormikTextInput
      name="repository"
      placeholder="Repository name"
      autoCapitalize="none"
      testID="repositoryInput"
      style={styles.textInput}
    />

    <FormikTextInput
      name="rating"
      placeholder="Rating"
      autoCapitalize="none"
      testID="ratingInput"
      style={styles.textInput}
    />

    <FormikTextInput
      name="review"
      placeholder="Review"
      autoCapitalize="none"
      testID="reviewInput"
      style={styles.textInput}
      multiline={true}
    />

    <TouchableWithoutFeedback
      onPress={onSubmit}
      testID="submitButton"
    >
      <Text style={styles.button}>Create a review</Text>
    </TouchableWithoutFeedback>
  </View>
);

const Review = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { owner, rating, repository, review: reviewValue } = values;
    const review = {
      repositoryName: repository,
      ownerName: owner,
      rating: parseInt(rating),
      text: reviewValue,
    };
    const data = await createReview(review);
    const repositoryId = data.createReview.repositoryId;
    history.push(`/${repositoryId}`);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default Review;
