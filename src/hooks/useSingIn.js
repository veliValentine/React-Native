import { useMutation } from '@apollo/react-hooks';

import { AUTHORIZE } from '../graphql/mutations';

const useSingIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    return await mutate({ variables: { username, password } });
  };
  return [signIn, result];
};

export default useSingIn;