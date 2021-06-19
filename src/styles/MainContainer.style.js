import styled from 'styled-components';

export const MainContainerWrapper = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`;
