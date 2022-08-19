import styled from "styled-components";

export const InputTagData = styled.input`
  background: #c0d8fa;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 1.1rem;
  margin: 1vh auto 3vh;
  width: 100%;
  color: #000000;
`;

export const LabelTagData = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.body};
  display: block;
  margin: 0;
`;
