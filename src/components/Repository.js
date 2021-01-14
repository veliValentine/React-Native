import React from 'react';

import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';

import ReviewList from './ReviewList';

const Repository = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository(id, 5);

  if (!repository) {
    return null;
  }

  const reviews = repository.reviews.edges.map(edge => edge.node);

  const onEndReached = () => {
    fetchMore();
  };

  return (
    <ReviewList
      reviews={reviews}
      onEndReached={onEndReached}
      repository={repository}
    />
  );
};

export default Repository;
