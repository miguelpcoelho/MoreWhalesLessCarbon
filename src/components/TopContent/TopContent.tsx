import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import Header from "../Header/Header";
import * as Styled from "./TopContent.styles";

interface TopContentProps {
  title: string;
  subtitle?: string;
}

const TopContent = ({ title, subtitle }: TopContentProps) => {
  return (
    <View>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </View>
  );
};

export default TopContent;
