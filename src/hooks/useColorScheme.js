import { useEffect, useState, useRef } from 'react';
import { getCurrentColorScheme } from 'utility/theme';

const useColorScheme = () => {
  const isMounted = useRef();
  const colorScheme = useRef();

  const [scheme, setColorScheme] = useState(() => {
    const { scheme } = (colorScheme.current = getCurrentColorScheme());
    return scheme;
  });

  useEffect(() => {
    const { query } = colorScheme.current;

    query.addEventListener('change', schemeChangeHandler);
    isMounted.current = true;

    function schemeChangeHandler(evt) {
      if (!evt.matches) {
        this.removeEventListener('change', schemeChangeHandler);
        const { query, scheme } = (colorScheme.current =
          getCurrentColorScheme());

        isMounted.current && setColorScheme(scheme);
        query.addEventListener('change', schemeChangeHandler);
      }
    }

    return () => {
      const { query } = colorScheme.current;
      query.removeEventListener('change', schemeChangeHandler);
      isMounted.current = false;
    };
  }, []);

  return scheme;
};

export default useColorScheme;
