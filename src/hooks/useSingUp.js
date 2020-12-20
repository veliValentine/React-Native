import { useMutation } from '@apollo/react-hooks';

import { CREATE_USER } from '../graphql/mutations';

const useSingUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const singUp = async ({ username, password }) => {
    const user = { username, password };
    const payload = await mutate({ variables: { user } });
    return payload;
  };

  return [singUp, result];
};

export default useSingUp;
