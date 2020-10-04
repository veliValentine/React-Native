import React from 'react';
import Text from './Text';
import Theme from '../theme';

const AppBarTab = ({ children }) => <Text style={{ color: Theme.appBarTab.textColor }}>{children}</Text>;

export default AppBarTab;