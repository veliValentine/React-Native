import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';

import { SignInForm } from '../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const { getByTestId, debug } = render(<SignInForm onSubmit={onSubmit} />);
      //debug();
      await act(async () => {
        fireEvent.changeText(getByTestId('usernameInput'), 'kalle');
        //fireEvent.changeText(getByTestId('passwordInput'), 'password');
        //fireEvent.press(getByTestId('submitButton'));
        await waitFor(() => {
          // expect the onSubmit function to have been called once and with a correct first argument
          expect(onSubmit).toHaveBeenCalled(1);
        });
      });

      expect(1).toBe(1);
    });
  });
});