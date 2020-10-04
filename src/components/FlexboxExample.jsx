import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex'
  },
  flexItemA: {
    flexGrow: 0,
    backgroundColor: 'green',
  },
  flexItemB: {
    flexGrow: 1,
    backgroundColor: 'red',
  },
});

const FlexboxExample = () => {
  return (
    <View style={styles.flexContainer}>
      <Text> </Text>
      <View style={styles.flexItemA} >
        <Text>Flex item A</Text>
      </View>
      <View style={styles.flexItemB} >
        <Text>Flex item B</Text>
      </View>
    </View>
  );
};

export default FlexboxExample;