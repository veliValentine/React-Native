import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native';
import useAuthorize from '../../hooks/useAuthorize';
import Constants from 'expo-constants';

import { Link } from 'react-router-native';
import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  flexContainer: {
    //flexDirection: 'column',
    //justifyContent: 'flex-start',
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  flexContainerTabs: {
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const { authObj } = useAuthorize();

  return (
    <View style={styles.flexContainer}>
      <ScrollView horizontal style={styles.flexContainerTabs}>
        <TouchableWithoutFeedback>
          <View style={styles.flexContainerTabs}>
            <Link to='/' component={TouchableOpacity}>
              <AppBarTab>Repositories</AppBarTab>
            </Link>
            {authObj ?
              <>
                <Link to='/createReview' component={TouchableOpacity}>
                  <AppBarTab>Create a review</AppBarTab>
                </Link>
                <Link to='/myReviews' component={TouchableOpacity}>
                  <AppBarTab>My reviews</AppBarTab>
                </Link>
                < Link to='/singOut' component={TouchableOpacity}>
                  <AppBarTab>Sing out</AppBarTab>
                </Link>
              </>
              :
              <>
                <Link to='/singIn' component={TouchableOpacity}>
                  <AppBarTab>Sing in</AppBarTab>
                </Link>
                <Link to='/singUp' component={TouchableOpacity}>
                  <AppBarTab>Sing up</AppBarTab>
                </Link>
              </>
            }
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View >
  );
};

export default AppBar;
