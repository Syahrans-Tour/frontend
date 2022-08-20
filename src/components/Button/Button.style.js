import styled from "styled-components";


export const ButtonBg = styled.button`
  background: #fed894;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  text-align: center;
  font-size: 1.2rem;
  width: 14vw;
  margin-top: ${(props) => props.mt};
  padding: 10px;
  height: fit-content;
`;