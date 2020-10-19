import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import MaterialMain from './MaterialExamples';
import SingOut from './SingOut';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.main.background,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/singIn'>
          <SignIn />
        </Route>
        <Route path='/singOut'>
          <SingOut />
        </Route>
        <Route path='/material'>
          <MaterialMain />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;