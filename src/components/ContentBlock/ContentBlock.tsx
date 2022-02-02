import React from "react";
import { Text, View } from "react-native";
import { ContentBlockProps } from "../../interfaces";
import * as Styled from "./ContentBlock.styles";

const ContentBlock = ({ text, image, id }: ContentBlockProps) => {
  return (
    <Styled.Container testID={String(id)}>
      <Text>{text}</Text>
      {image && <Styled.ImageContainer source={image} />}
    </Styled.Container>
  );
};

export default ContentBlock;
