import styled from 'styled-components';
import Icon from '@ant-design/icons';
import { Button } from 'antd';

export const ButtonWrapper = styled(Button)`
  position: absolute;
  right: 0;
  margin: 18px;
  box-shadow: 0 8px 40px 0 ${(props) => props.theme.color}55,
    0 3px 9px 0 ${(props) => props.theme.color}55;

  &.ant-btn-primary {
    background: ${(props) => props.theme.color};
    border-color: ${(props) => props.theme.color};
  }
`;

export const ButtonIcon = styled(Icon)`
  svg {
    fill: ${(props) => props.theme.background};
  }
`;
