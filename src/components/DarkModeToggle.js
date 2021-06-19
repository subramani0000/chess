import React, { useContext } from 'react';
import ThemeContext from 'contexts/ThemeContext';
import { Tooltip } from 'antd';
import { ButtonWrapper, ButtonIcon } from 'styles/DarkModeToggle.style';
import { THEME_NAMES } from 'constants/theme';
import { ReactComponent as DarkModeSvg } from 'assets/images/DarkMode.svg';
import { ReactComponent as LightModeSvg } from 'assets/images/LightMode.svg';

const DarkModeToggle = () => {
  const { toggleDarkMode, theme } = useContext(ThemeContext);
  const darkMode = theme.name === THEME_NAMES.dark;

  const onButtonClick = () => {
    toggleDarkMode(!darkMode);
  };

  const buttonIcon = (
    <ButtonIcon
      component={darkMode ? LightModeSvg : DarkModeSvg}
      theme={theme}
    />
  );

  return (
    <Tooltip
      placement="left"
      title={darkMode ? 'Light Mode' : 'DarkMode'}
      destroyTooltipOnHide={true}
    >
      <ButtonWrapper
        type="primary"
        shape="circle"
        icon={buttonIcon}
        size="large"
        onClick={onButtonClick}
        theme={theme}
      />
    </Tooltip>
  );
};

export default DarkModeToggle;
