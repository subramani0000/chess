import { ThemeContextProvider } from 'contexts/ThemeContext';
import useColorScheme from 'hooks/useColorScheme';
import { COLOR_SCHEME_THEME_MAP } from 'constants/theme';
import MainContainer from 'components/MainContainer';
import DarkModeToggle from 'components/DarkModeToggle';

const App = () => {
  const colorScheme = useColorScheme();
  const themeName = COLOR_SCHEME_THEME_MAP[colorScheme];
  return (
    <ThemeContextProvider themeName={themeName}>
      <MainContainer>
        <DarkModeToggle />
        CHESS
      </MainContainer>
    </ThemeContextProvider>
  );
};

export default App;
