import styled from "styled-components";

export const InputTagData = styled.input`
  background: ${(props)=>props.theme.background};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 1.1rem;
  margin: 1vh auto 3vh;
  width: 100%;
  color: ${(props) => props.theme.toggleBorder};
`;

export const LabelTagData = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.text};
  display: block;
  margin: 0;
`;
