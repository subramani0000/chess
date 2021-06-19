import React, { useContext } from 'react';
import ThemeContext from 'contexts/ThemeContext';
import { MainContainerWrapper } from 'styles/MainContainer.style';

const MainContainer = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <MainContainerWrapper theme={theme}>{children}</MainContainerWrapper>;
};

export default MainContainer;
