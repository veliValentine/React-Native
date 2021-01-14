import React from 'react';
import { View } from 'react-native';
import useAuthorize from '../hooks/useAuthorize';
import ReviewList from './ReviewList';

const UserReviews = () => {
  const { authObj } = useAuthorize({ includeReviews: true });

  const reviewNodes = authObj
    ? authObj.reviews.edges.map(edge => edge.node)
    : [];
  console.log(reviewNodes);

  return (
    <View>
      <ReviewList reviews={reviewNodes} />
    </View>
  );
};

export default UserReviews;
