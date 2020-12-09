import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
});

const AppBarTab = ({ children }) => <Text fontWeight='bold' style={styles.text}>{children}</Text>;

export default AppBarTab;