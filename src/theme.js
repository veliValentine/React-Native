import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  appBar: {
    background: '#24292e'
  },
  appBarTab: {
    textColor: 'white'
  },
  main: {
    background: '#e1e4e8'
  },
  repositoryListItem: {
    background: 'white'
  },
  error: {
    color: '#d73a4a'
  },
};

export default theme;