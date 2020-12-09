import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

import theme from '../../theme';
import Text from '../Text';
import formatInThousands from '../../utils/formatInThousands';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatarContainer: {
    flexGrow: 0,
    marginRight: 20,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  linkContainer: {
    backgroundColor: theme.colors.primary,
    marginTop: 5,
    padding: 15,
    borderRadius: theme.roundness,
  },
  linkText: {
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center'
  },
  nameText: {
    marginBottom: 5,
  },
  descriptionText: {
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: theme.roundness,
  },
  countItem: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  countItemCount: {
    marginBottom: 5,
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  languageText: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
});

const CountItem = ({ label, count }) => {
  return (
    <View style={styles.countItem}>
      <Text
        style={styles.countItemCount}
        fontWeight="bold"
        testID={`${label.toLowerCase()}Count`}
      >
        {formatInThousands(count)}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

const RepositoryItem = ({ repository, link }) => {
  const history = useHistory();
  const {
    description,
    fullName,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
    id,
    url,
  } = repository;

  const onPress = () => {
    if (!link) {
      history.push(`/${id}`);
    }
  };

  const onPressGithub = () => Linking.openURL(url);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={link ? 1 : 0.5}
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
          </View>
          <View style={styles.contentContainer}>
            <Text
              style={styles.nameText}
              fontWeight="bold"
              fontSize="subheading"
              numberOfLines={1}
              testID="fullName"
            >
              {fullName}
            </Text>
            <Text
              style={styles.descriptionText}
              color="textSecondary"
              testID="description"
            >
              {description}
            </Text>
            {language ? (
              <View style={styles.languageContainer}>
                <Text
                  style={styles.languageText}
                  testID="language"
                >{language}</Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <CountItem count={stargazersCount} label="Stars" />
          <CountItem count={forksCount} label="Forks" />
          <CountItem count={reviewCount} label="Reviews" />
          <CountItem count={ratingAverage} label="Rating" />
        </View>
        {!link ? null :
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={onPressGithub}>
              <Text style={styles.linkText} >
                Open in GitHub
              </Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    </TouchableOpacity>
  );
};

export default RepositoryItem;