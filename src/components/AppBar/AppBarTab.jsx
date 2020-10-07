import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.appBarTab.textColor,
    padding: 10
  }
});

const AppBarTab = ({ children }) => <Text fontWeight='bold' style={styles.text}>{children}</Text>;

export default AppBarTab;