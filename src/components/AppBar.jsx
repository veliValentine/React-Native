import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';

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

  return (
    <View style={styles.flexContainer}>
      <ScrollView horizontal style={styles.flexContainerTabs}>
        <TouchableWithoutFeedback>
          <View style={styles.flexContainerTabs}>
            <Link to='/' component={TouchableOpacity}>
              <AppBarTab>Repositories</AppBarTab>
            </Link>
            <Link to='/singIn' component={TouchableOpacity}>
              <AppBarTab>Sing in</AppBarTab>
            </Link>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export default AppBar;