import React, { useContext } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';
import AuthStorageContext from '../contexts/AuthStorageContext';
import Text from './Text';

const SingOut = () => {
  const history = useHistory();
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);

  const singOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push('/singIn');
  };

  singOut();

  return <Text>Logging out...</Text>;
};

export default SingOut;