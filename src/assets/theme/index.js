import LightTheme from './light';
import CustomTheme from './custom';
import DarkTheme from './dark';
import defaultTheme from './default';
import { THEME_NAMES } from 'constants/theme';

const Themes = {
  [THEME_NAMES.light]: { ...defaultTheme, ...LightTheme },
  [THEME_NAMES.dark]: { ...defaultTheme, ...DarkTheme },
  [THEME_NAMES.custom]: { ...defaultTheme, ...CustomTheme },
};

export default Themes;
