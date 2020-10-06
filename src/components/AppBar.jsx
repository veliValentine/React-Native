import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.background,
  },
  flexContainerTabs: {
    flexDirection: 'row',
  },
});

const AppBar = () => {

  const handleClick = () => {
    console.log('click');
  };

  return (
    <View style={styles.flexContainer}>
      <TouchableWithoutFeedback onPress={handleClick}>
        <View style={styles.flexContainerTabs}>
          <Link to='/' component={TouchableOpacity}>
            <AppBarTab>Repositories</AppBarTab>
          </Link>
          <Link to='SingIn' component={TouchableOpacity}>
            <AppBarTab>Sing in</AppBarTab>
          </Link>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBar;