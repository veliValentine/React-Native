import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import MaterialMain from './MaterialExamples';
import SingOut from './SingOut';
import Repository from './Repository';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/singIn'>
          <SignIn />
        </Route>
        <Route path='/singOut'>
          <SingOut />
        </Route>
        <Route path='/material'>
          <MaterialMain />
        </Route>
        <Route path='/:id'>
          <Repository />
        </Route>
        <Route path='/'>
          <RepositoryList />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;