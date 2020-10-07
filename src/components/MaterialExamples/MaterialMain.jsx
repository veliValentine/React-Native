import React from 'react';
import { View } from 'react-native';
import Text from '../Text';
import BodyMassIndexCalculator from './BodyMassIndexCalculator';

const MaterialMain = () => {
  return (
    <View>
      <Text>Material!</Text>
      <Text>------------------------------------------------------------------------------------------------------</Text>
      <BodyMassIndexCalculator />
    </View>
  );
};

export default MaterialMain;