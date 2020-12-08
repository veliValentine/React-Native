//import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

/*const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    onError: (e) => {
      console.error(e);
    }
  });

  const fetchRepositories = () => {
    if (data) {
      setRepositories(data.repositories);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, [loading]);

  return { repositories, loading, refetch: fetchRepositories };
};*/

const useRepositories = () => {
  const { data, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data ? data.repositories : undefined, ...result };
};

export default useRepositories;