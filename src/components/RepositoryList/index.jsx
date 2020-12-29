import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import useRepositories from '../../hooks/useRepositories';

import RepositoryItem from './RepositoryItem';
import Text from '../Text';
import { Button, Divider, Menu } from 'react-native-paper';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  listHeader: {
    padding: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ListHeader = ({ setSort: setSortArray }) => {
  const [sort, setSort] = setSortArray;
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const changeSort = (value) => {
    setSort(value);
    closeMenu();
  };

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={<Button onPress={openMenu}>{sort}</Button>}
    >
      <Text style={{ padding: 5 }}>Select an item...</Text>
      <Menu.Item onPress={() => changeSort('Latest repositories')} title="Latest repositories" />
      <Menu.Item onPress={() => changeSort('Highest rated repositories')} title="Highest rated repositories" />
      <Menu.Item onPress={() => changeSort('Lowest rated repositories')} title="Lowest rated repositories" />
      <Divider />
      <Menu.Item onPress={() => setVisible(false)} title="Close" />
    </Menu>
  );
};

export const RepositoryListContainer = ({ repositories, setSort }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
      keyExtractor={item => item.id}
      testID="flatList"
      ListHeaderComponent={<ListHeader setSort={setSort} />}
      ListHeaderComponentStyle={styles.listHeader}
    />
  );
};

const RepositoryList = () => {
  const [sort, setSort] = useState('Latest repositories');
  const { repositories } = useRepositories(sort);

  return <RepositoryListContainer repositories={repositories} setSort={[sort, setSort]} />;
};

export default RepositoryList;
