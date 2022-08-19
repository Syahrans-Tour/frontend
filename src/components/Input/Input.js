import React from "react";
import * as S from "./Input.style";

export const InputData = (props) => {
  return (
    <>
      <S.LabelTagData>{props.label}</S.LabelTagData>
      <S.InputTagData
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
        onKeyDown={props.onKeyDown}
      />
    </>
  );
};
