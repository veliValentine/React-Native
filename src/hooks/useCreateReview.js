import { useMutation } from '@apollo/react-hooks';

import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate] = useMutation(CREATE_REVIEW);

  const createReview = async (review) => {
    const payload = await mutate({ variables: { review } });
    const { data } = payload;
    return data;
  };

  return [createReview];
};

export default useCreateReview;
