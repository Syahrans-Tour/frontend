import React, { useState } from "react";
import { InputData } from "../../components/Input/Input";
import * as S from "./Home.style";

const invertTheme = ({ white, primary }) => ({
  primary: white,
  white: primary,
});

const Home = (props) => {
  return (
    <S.HomeTemplate>
      <S.ToggleButtonDiv>
        <S.ButtonToggle onClick={props.themeToggler}>
          Change Theme
        </S.ButtonToggle>
      </S.ToggleButtonDiv>
      <S.HomeMain>
        <InputData
          label="Find anything that you want in your holiday"
          type="search"
          placeholder="type anything and separate by commas"
          required={true}
        />
      </S.HomeMain>
    </S.HomeTemplate>
  );
};

export default Home;
