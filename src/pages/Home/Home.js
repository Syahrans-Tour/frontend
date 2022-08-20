import React, { useState } from "react";
import { InputData } from "../../components/Input/Input";
import * as S from "./Home.style";
import { Buttons } from "../../components/Button/Button";

const Home = (props) => {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();
    
    if (key === "," && trimmedInput.length) {
      e.preventDefault();
      if (!tags.includes(trimmedInput) && tags.length <= 10)
        setTags((prevState) => [...prevState, trimmedInput]);
      setInput("");
    }
  };
  return (
    <S.HomeTemplate>
      <S.ToggleButtonDiv>
        <S.HomeToggle>Toggle Mode: </S.HomeToggle>
        <S.InputDumm type="checkbox" id="switch" />
        <S.Slider for="switch" onClick={props.themeToggler}>
          Toggle
        </S.Slider>
      </S.ToggleButtonDiv>
      <S.HomeMain>
        <S.HomeTitle>Syahrans Tour</S.HomeTitle>
        <InputData
          label="Search holiday expectation!"
          type="search"
          placeholder="type anything and separate by commas"
          required={true}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={input}
        />
        <S.Bottoms>
          <Buttons title="Cari" />
          <S.HomeToggle>Tags:</S.HomeToggle>
          <S.Tags>
            {tags.map((data, idx) => (
              <S.TagComponent key={idx}>{data}</S.TagComponent>
            ))}
          </S.Tags>
        </S.Bottoms>
      </S.HomeMain>
    </S.HomeTemplate>
  );
};

export default Home;
