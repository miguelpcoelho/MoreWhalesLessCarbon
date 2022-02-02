import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import * as Styled from "./Cover.styles";

interface OptionProps {
  id: number;
  title: string;
  content: string;
  navigateTo: string;
}

const options: OptionProps[] = [
  { id: 1, title: "the problem:", content: "CO2", navigateTo: "Problem" },
  { id: 2, title: "solution:", content: "the ocean", navigateTo: "Solution" },
];

const Cover = () => {
  const navigation = useNavigation<any>();

  return (
    <Styled.Container>
      <Styled.Title>let's help nature together!</Styled.Title>
      <View>
        {options.map((option) => (
          <Styled.OptionContainer
            key={option.id}
            onPress={() => navigation.navigate(option.navigateTo)}
          >
            <Styled.OptionTitle>{option.title}</Styled.OptionTitle>
            <Styled.OptionContent>{option.content}</Styled.OptionContent>
          </Styled.OptionContainer>
        ))}
      </View>
    </Styled.Container>
  );
};

export default Cover;
