import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const fetchRepositories = () => {
    if(data) {
      setRepositories(data.repositories);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, [loading]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;

/*
const fetchRepositories = async () => {
    setLoading(true);

    const url = false  // eslint-disable-line no-constant-condition
      ? 'http://87.92.18.236:5000/api/repositories'
      : 'http://192.168.1.3:5000/api/repositories';
    const response = await fetch(url);
    const json = await response.json();

    setLoading(false);
    setRepositories(json);

    useEffect(() => {
    fetchRepositories();
  }, []);
  };
*/