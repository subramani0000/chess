import { createContext, useEffect, useState } from 'react';
import Themes from 'assets/theme';
import { THEME_NAMES } from 'constants/theme';
import { getThemeFromStorage, setThemeToStorage } from 'utility/theme';

const initialValue = {
  theme: Themes[getThemeFromStorage() || THEME_NAMES.light],
  toggleTheme: () => {},
};

const ThemeContext = createContext(initialValue);

export const ThemeContextProvider = ({ children, themeName }) => {
  const [theme, setTheme] = useState(initialValue.theme);

  useEffect(() => {
    if (!getThemeFromStorage()) {
      setTheme(Themes[themeName]);
    }
  }, [themeName]);

  const toggleTheme = (themeName) => {
    setTheme(Themes[themeName]);
    setThemeToStorage(themeName);
  };

  const toggleDarkMode = (darkMode) => {
    const themeName = darkMode ? THEME_NAMES.dark : THEME_NAMES.light;
    toggleTheme(themeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
