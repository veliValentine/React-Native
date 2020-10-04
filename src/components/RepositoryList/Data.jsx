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
    justifyContent: 'space-evenly'
  },
});

const DataItem = ({ text, value }) => {
  if (value >= 1000) {
    return (
      <View style={styles.flexContainerItem}>
        <Text fontWeight='bold' >{Math.floor(value / 100) / 10 + 'k'}</Text>
        <Text>{text}</Text>
      </View>
    );
  }
  return (
    <View style={styles.flexContainerItem}>
      <Text fontWeight='bold' >{value}</Text>
      <Text>{text}</Text>
    </View>
  );
};

const Data = ({ stars, forks, reviews, rating }) => (
  <View style={styles.flexContainerItems}>
    <DataItem text={'Stars'} value={stars} />
    <DataItem text={'Forks'} value={forks} />
    <DataItem text={'Reviews'} value={reviews} />
    <DataItem text={'Rating'} value={rating} />
  </View>
);

export default Data;