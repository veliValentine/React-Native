import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

import { useHistory } from 'react-router-native';
import useSingIn from '../hooks/useSingIn';
import useSingUp from '../hooks/useSingUp';

import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

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
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1)
    .max(30)
    .required('Username is required'),
  password: yup
    .string()
    .min(5)
    .max(50)
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required')
});

export const SingUpForm = ({ onSubmit }) => (
  <View style={styles.container}>
    <FormikTextInput
      style={styles.textInput}
      name='username'
      placeholder='Username'
      autoCapitalize='none'
      testID="usernameInput"
    />
    <FormikTextInput
      style={styles.textInput}
      name='password'
      placeholder='Password'
      secureTextEntry
      autoCapitalize='none'
      testID="passwordInput"
    />
    <FormikTextInput
      style={styles.textInput}
      name='passwordConfirmation'
      placeholder='Password confirmation'
      secureTextEntry
      autoCapitalize='none'
      testID="passwordConfirmationInput"
    />
    <TouchableWithoutFeedback
      style={styles.buttonContainer}
      onPress={onSubmit}
      testID="submitButton"
    >
      <Text style={styles.button}>Sing up</Text>
    </TouchableWithoutFeedback>
  </View>
);

const SingUp = () => {
  const [singUp] = useSingUp();
  const [singIn] = useSingIn();
  const history = useHistory();

  const onSubmit = async ({ username, password }) => {
    const payload = await singUp({ username, password });
    const { data } = payload;
    await singIn({ username: data.createUser.username, password });
    history.push('/');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SingUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SingUp;
