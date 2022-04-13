import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import * as Styled from "./TitleSubtitle.styles";

interface TitleSubtitleProps {
  title: string;
  subtitle?: string;
}

const TitleSubtitle = ({ title, subtitle }: TitleSubtitleProps) => {
  return (
    <View>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </View>
  );
};

export default TitleSubtitle;
