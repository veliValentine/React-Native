import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import useRepositories from '../../hooks/useRepositories';
import { useDebounce } from 'use-debounce/lib';

import RepositoryItem from './RepositoryItem';
import Text from '../Text';
import { Button, Divider, Menu } from 'react-native-paper';
import TextInput from '../TextInput';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  listHeader: {
    padding: 10,
  },
  searchContainer: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SortList = ({ sortItem }) => {
  const [sort, setSort] = sortItem;
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const changeSort = (value) => () => {
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
      <Menu.Item onPress={changeSort('Latest repositories')} title="Latest repositories" />
      <Menu.Item onPress={changeSort('Highest rated repositories')} title="Highest rated repositories" />
      <Menu.Item onPress={changeSort('Lowest rated repositories')} title="Lowest rated repositories" />
      <Divider />
      <Menu.Item onPress={() => setVisible(false)} title="Close" />
    </Menu>
  );
};

const SearchRepository = ({ searchValueItem }) => {
  const [text, setText] = useState('');
  const [value] = useDebounce(text, 500);
  const [, setSearchValue] = searchValueItem;

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder={'Search repository'}
        onChangeText={t => setText(t)}
      />
    </View>
  );
};

export const RepositoryListContainer = ({ repositories, sortItem, searchValueItem, onEndReached }) => {

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
      ListHeaderComponent={
        <View>
          <SearchRepository searchValueItem={searchValueItem} />
          <SortList sortItem={sortItem} />
        </View>
      }
      ListHeaderComponentStyle={styles.listHeader}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const [sort, setSort] = useState('Latest repositories');
  const [searchValue, setSearchValue] = useState('');
  const { repositories, fetchMore } = useRepositories(sort, searchValue,8);

  const onEndReached = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortItem={[sort, setSort]}
      searchValueItem={[searchValue, setSearchValue]}
      onEndReached={onEndReached}
    />
  );
};

export default RepositoryList;
