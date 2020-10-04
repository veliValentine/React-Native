import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  picture: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  flexContainerPictureAndInformation: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10
  },
  flexContainerInformation: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10,
  },
  description: {
    alignSelf: 'flex-start',
    padding: 3
  },
  language: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    color: 'white',
    borderRadius: 5,
    padding: 3,
  },
});

const Information = ({ name, description, language }) => (
  <View style={styles.flexContainerInformation}>
    <Text fontSize='subheading' fontWeight='bold' style={styles.name} >{name}</Text>
    <Text style={styles.description} >{description}</Text>
    <Text style={styles.language} >{language}</Text>
  </View>
);

const GeneralInformation = ({ picURL, fullName, description, language }) => {
  return (
    <View style={styles.flexContainerPictureAndInformation} >
      <Image style={styles.picture} source={{ uri: picURL }} />
      <Information name={fullName} description={description} language={language} />
    </View>
  );
};

export default GeneralInformation;