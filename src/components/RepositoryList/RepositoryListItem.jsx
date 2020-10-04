import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import Data from './Data';
import GeneralInformation from './GeneralInformation';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.repositoryListItem.background,
    flexDirection: 'column'
  },
});

const RepositoryListItem = ({ item }) => {
  const { description, forksCount, fullName, language, ratingAverage, reviewCount, stargazersCount, ownerAvatarUrl } = item;
  return (
    <View style={styles.container} >
      <GeneralInformation description={description} fullName={fullName} language={language} picURL={ownerAvatarUrl} />
      <Data stars={stargazersCount} forks={forksCount} reviews={reviewCount} rating={ratingAverage} />
    </View>
  );
};

export default RepositoryListItem;