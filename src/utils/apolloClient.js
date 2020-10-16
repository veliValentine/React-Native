import ApolloClient, { InMemoryCache } from 'apollo-boost';
import Constants from 'expo-constants';

const CreateApolloClient = () => {
  return new ApolloClient({
    uri: Constants.manifest.extra.APOLLO_URI,
    cache: new InMemoryCache()
  });
};

export default CreateApolloClient;