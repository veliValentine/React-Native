import ApolloClient, { InMemoryCache } from 'apollo-boost';
import Constants from 'expo-constants';

const CreateApolloClient = (authStorage) => {
  return new ApolloClient({
    uri: Constants.manifest.extra.APOLLO_URI,
    cache: new InMemoryCache(),
    request: async (operation) => {
      try {
        const accessToken = await authStorage.getAccessToken();
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  });
};

export default CreateApolloClient;