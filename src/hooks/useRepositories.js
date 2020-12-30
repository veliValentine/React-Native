//import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (order, searchKeyword) => {
  console.log('useRepositories');
  const variables = {
    orderDirection: 'DESC',
    orderBy: 'CREATED_AT',
    searchKeyword: searchKeyword ? searchKeyword: ''
  };

  switch (order) {
    case 'Latest repositories':
      break;
    case 'Highest rated repositories':
      variables.orderBy = 'RATING_AVERAGE';
      break;
    case 'Lowest rated repositories':
      variables.orderBy = 'RATING_AVERAGE';
      variables.orderDirection = 'ASC';
      break;
    default:
      return;
  }

  const { data, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  return { repositories: data ? data.repositories : undefined, ...result };
};

export default useRepositories;
