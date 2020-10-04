import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import Theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Theme.appBar.background,
    paddingBottom: Constants.statusBarHeight / 2,
  },
});

const AppBar = () => {

  const handleClick = () => {
    console.log('click');
  };

  return (
    <View style={styles.flexContainer}>
      <TouchableWithoutFeedback onPress={handleClick}>
        <View>
          <AppBarTab>Repositories</AppBarTab>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBar;