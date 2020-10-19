import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import useSingIn from '../hooks/useSingIn';

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
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.textInput}
        name='username'
        placeholder='Username'
        autoCapitalize='none'
      />
      <FormikTextInput
        style={styles.textInput}
        name='password'
        placeholder='Password'
        secureTextEntry
        autoCapitalize='none'
      />
      <TouchableWithoutFeedback style={styles.buttonContainer} onPress={onSubmit}>
        <Text style={styles.button}>Sing in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const [singIn] = useSingIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await singIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (e) {
      if(e instanceof Error) {
        console.log(e.message);
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;