import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import BodyMassIndexCalculator from './BodyMassIndexCalculator';
import WhatIsMyPlatform from './WhatIsMyPlatform';

const MaterialMain = () => {
  return (
    <View>
      <Text>Material!</Text>
      <WhatIsMyPlatform />
      <Text>------------------------------------------------------------------------------------------------------</Text>
      <BodyMassIndexCalculator />
    </View>
  );
};

export default MaterialMain;