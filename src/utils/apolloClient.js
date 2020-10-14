import ApolloClient from 'apollo-boost';

const CreateApolloClient = () => {
  return new ApolloClient({
    uri: 'http://192.168.1.3:5000/graphql'
  });
};

export default CreateApolloClient;