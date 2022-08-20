import styled from "styled-components";

export const HomeTemplate = styled.div`
  background-color: ${(props) => props.theme.body};
  min-width: 100vw;
  min-height: 100vh;
`;

export const HomeTitle = styled.h2`
  font-size: 3rem;
  color: ${(props) => props.theme.text};
  text-align: center;
  font-weight: 900;
  margin-bottom: 4vh;
`;

export const HomeToggle = styled.p`
  margin-top: 1.2vh;
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  margin-right: 2vw;
`;

export const HomeMain = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10vh 0;
`;

export const ToggleButtonDiv = styled.div`
  position: absolute;
  top: 0;
  right: 2vw;
  display: flex;
  align-items: center;
`;

export const Slider = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 30px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;

export const InputDumm = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + ${Slider} {
    background: #28292c;
  }
  &:checked ~ ${Slider}:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
  &:active:after {
    width: 130px;
  }
`;

export const Bottoms = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const Tags = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.2vw;
`;

export const TagComponent = styled.div`
  border-radius: 5px;
  background-color: #adadad;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px;
  width: 100px;
  text-align: center;
  word-break: break-word;
`;
