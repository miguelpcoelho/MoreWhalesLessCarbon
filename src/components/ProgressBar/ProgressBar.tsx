import React from "react";
import * as Styled from "./ProgressBar.styles";

const ProgressBar = ({ name }: { name: string }) => {
  return (
    <Styled.Container>
      <Styled.NameContainer>
        <Styled.Name>{name}</Styled.Name>
      </Styled.NameContainer>
      <Styled.ProgressBar />
    </Styled.Container>
  );
};

export default ProgressBar;
