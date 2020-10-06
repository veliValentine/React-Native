import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  flexContainerItems: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  flexContainerItem: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
});

const DataItem = ({ value, children }) => {
  if (value >= 1000) {
    value = Math.floor(value / 100) / 10 + 'k';
  }
  return (
    <View style={styles.flexContainerItem}>
      <Text fontWeight='bold' >{value}</Text>
      <Text>{children}</Text>
    </View>
  );
};

const Data = ({ stars, forks, reviews, rating }) => (
  <View style={styles.flexContainerItems}>
    <DataItem value={stars}>Stars</DataItem>
    <DataItem value={forks} >Forks</DataItem>
    <DataItem value={reviews} >Reviews</DataItem>
    <DataItem value={rating} >Rating</DataItem>
  </View>
);

export default Data;