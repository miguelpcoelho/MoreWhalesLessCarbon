import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageSourcePropType, SafeAreaView } from "react-native";
import whale1 from "../../../assets/images/whale1.png";
import whale2 from "../../../assets/images/whale2.png";
import whale3 from "../../../assets/images/whale3.png";
import * as Styled from "./Solution.styles";

interface TitleImages {
  name: string;
  image: ImageSourcePropType;
}

interface Solution {
  title?: string;
  whales?: TitleImages[];
}

const solutions: Solution[] = [
  { title: "the ocean\n for global climate" },
  { title: "whales\n the biological pump" },
  {
    whales: [
      { name: "maria", image: whale1 },
      { name: "jeremias", image: whale2 },
      { name: "baltazar", image: whale3 },
    ],
  },
  { title: "what you can do" },
];

const Solution = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Styled.Container>
        <Styled.Title>Whales</Styled.Title>
        <Styled.Subtitle>a CO2 sequestring machine</Styled.Subtitle>
        <Styled.SolutionsContainer>
          {solutions.map((solution) => {
            if (solution.title) {
              return (
                <Styled.Solution key={solution.title}>
                  <Styled.SolutionText>{solution.title}</Styled.SolutionText>
                </Styled.Solution>
              );
            } else {
              return (
                <Styled.WhalesContainer>
                  {solution.whales?.map((whale) => {
                    return (
                      <Styled.Whale
                        key={whale.name}
                        onPress={() => navigation.navigate("WhaleAnimation")}
                      >
                        <Styled.WhaleText>{whale.name}</Styled.WhaleText>
                        <Styled.ImageContainer source={whale.image} />
                      </Styled.Whale>
                    );
                  })}
                </Styled.WhalesContainer>
              );
            }
          })}
        </Styled.SolutionsContainer>
      </Styled.Container>
    </SafeAreaView>
  );
};

export default Solution;
