import React from "react";
import * as S from "./Button.style";

export const Buttons = ({ title, mt }) => {
  return (
    <S.ButtonBg type="submit" mt={mt}>
      {title}
    </S.ButtonBg>
  );
};
