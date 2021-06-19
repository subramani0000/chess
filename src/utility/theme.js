import {
  THEME_TYPE_KEY,
  THEME_NAMES,
  COLOR_SCHEME_THEME_MAP,
} from 'constants/theme';

export const getThemeFromStorage = () => {
  try {
    const themeName = window.localStorage.getItem(THEME_TYPE_KEY);
    if (Object.values(THEME_NAMES).includes(themeName)) {
      return themeName;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const setThemeToStorage = (themeName) => {
  window.localStorage.setItem(THEME_TYPE_KEY, themeName);
};

export const getCurrentColorScheme = () => {
  const QUERIES = {};

  return (() => {
    for (let scheme in COLOR_SCHEME_THEME_MAP) {
      const query = QUERIES.hasOwnProperty(scheme)
        ? QUERIES[scheme]
        : (QUERIES[scheme] = matchMedia(`(prefers-color-scheme: ${scheme})`));

      if (query.matches) return { query, scheme };
    }
  })();
};
