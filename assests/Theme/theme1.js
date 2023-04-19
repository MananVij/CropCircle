import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme1 = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff932b',
    accent: '#111111',
  },
};
export default theme1;