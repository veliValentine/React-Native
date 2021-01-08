//import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (order, searchKeyword, first) => {
  const variables = {
    orderDirection: 'DESC',
    orderBy: 'CREATED_AT',
    searchKeyword: searchKeyword ? searchKeyword : '',
    first
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

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges:[
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };
        return nextResult;
      },
    });
  };

  return {
    repositories: data ? data.repositories : undefined,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
