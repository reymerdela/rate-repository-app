import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    alert: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 22,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto_400Regular',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  background: {
    headerBg: '#24292e',
    mainBg: '#e1e4e8',
    white: '#fff',
  },
};

export default theme;
