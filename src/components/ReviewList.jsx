import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryList/RepositoryItem';
import Text from './Text';

import parseDate from '../utils/parseDate';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 15,
    padding: 15,
    flexDirection: 'row',
  },
  ratingContainer: {
    flex: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    marginRight: 20,
    justifyContent: 'center'
  },
  rating: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1
  },
  username: {
    color: theme.colors.textPrimary,
    fontWeight: "bold",
  },
  date: {
    marginTop: 1,
    color: theme.colors.textSecondary,
  },
  text: {
    marginTop: 5,
    color: theme.colors.textPrimary
  }
});

const RepositoryInfo = ({ repository }) => <RepositoryItem repository={repository} link={true} />;

const ReviewItem = ({ review }) => {
  const {
    text,
    rating,
    createdAt,
    user,
  } = review;
  const username = user.username;
  const date = parseDate(new Date(createdAt));

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer} >
        <Text style={styles.rating}>{rating}</Text>
      </View>
      <View style={styles.contentContainer} >
        <Text style={styles.username} >{username}</Text>
        <Text style={styles.date} >{date}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const ReviewList = ({ reviews, repository, onEndReached }) => (
  <FlatList
    data={reviews}
    renderItem={({ item }) => <ReviewItem review={item} />}
    keyExtractor={({ id }) => id}
    ListHeaderComponent={() => repository ? <RepositoryInfo repository={repository} /> : null}
    onEndReached={onEndReached}
  />
);

export default ReviewList;
