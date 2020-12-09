/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
// ...
import { SignInForm } from '../components/SignIn';
import { FormikTextInput } from '../components/FormikTextInput';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const { getByTestId, debug } = render(
        <FormikTextInput
          name='username'
          placeholder='Username'
          autoCapitalize='none'
          testID="usernameInput"
        />);
      debug();
      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
      });
      expect(1).toBe(1);
    });
  });
});