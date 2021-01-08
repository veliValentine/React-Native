/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
// ...
import { SingInFormContainer } from '../components/SignIn';


describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();

      const { getByTestId } = render(<SingInFormContainer onSubmit={onSubmit} />);

      fireEvent.changeText(getByTestId('usernameInput'), 'käyttäjätunnus');
      fireEvent.changeText(getByTestId('passwordInput'), 'salasana');
      fireEvent.press(getByTestId('submitButton'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'käyttäjätunnus',
          password: 'salasana',
        });
      });
    });
  });
});
