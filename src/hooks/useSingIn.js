import { useContext } from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';

import { AUTHORIZE } from '../graphql/mutations';

import AuthStorageContext from '../contexts/AuthStorageContext';

const useSingIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(AUTHORIZE);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };

    const payload = await mutate({ variables: { credentials } });
    const { data } = payload;

    if (data && data.authorize) {
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
    }

    return payload;
  };
  return [signIn, result];
};

export default useSingIn;
