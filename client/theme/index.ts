import type { Theme } from 'theme-ui';
import { colors } from './colors';
import * as elements from './elements';

const theme: Theme = {
  fonts: {
    primary: 'pt-sans-bold',
    secondary: 'pt-sans-regular'
  },
  colors,
  radii: {
    card: '0.5rem'
  },
  ...elements
};

export default theme;
