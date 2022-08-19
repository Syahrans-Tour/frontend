import styled from "styled-components";

export const HomeTemplate = styled.div`
  background-color: ${(props) => props.theme.background};
  min-width: 100vw;
  min-height: 100vh;
`;

export const HomeMain = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10vh 0;
`;

export const ToggleButtonDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ButtonToggle = styled.button`
  display: block;
  border-radius: 100%;
`;
