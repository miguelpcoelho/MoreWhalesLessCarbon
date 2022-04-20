import React from "react";
import { Dimensions } from "react-native";
import deep from "../../../assets/images/deep.png";
import * as Styled from "./InfoCard.styles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const imageSize = width * 0.18;

interface InfoCardProps {
  text: string;
}

const InfoCard = ({ text }: InfoCardProps) => {
  return (
    <Styled.Container>
      <Styled.DeepImage
        source={deep}
        style={{
          width: imageSize,
          height: imageSize,
          borderRadius: imageSize / 2,
        }}
      />
      <Styled.TextContainer
        style={{ width: width * 0.7, minHeight: height * 0.15 }}
      >
        <Styled.InfoText>{text}</Styled.InfoText>
      </Styled.TextContainer>
    </Styled.Container>
  );
};

export default InfoCard;
