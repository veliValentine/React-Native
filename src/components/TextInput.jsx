import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({});

// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, error, ...props }) => {
  if (error) {
    style = {
      ...style,
      borderColor: theme.error.color
    };
  }
  const TextInputStyle = [style];
  return <NativeTextInput style={TextInputStyle} {...props} />;
};

export default TextInput;