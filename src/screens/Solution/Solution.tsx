import { useNavigation } from "@react-navigation/native";
import { t } from "i18next";
import React from "react";
import { Dimensions, View } from "react-native";
import solutionBackground from "../../../assets/images/solution_background.png";
import whale1 from "../../../assets/images/whale1.png";
import whale2 from "../../../assets/images/whale2.png";
import whale3 from "../../../assets/images/whale3.png";
import Header from "../../components/Header/Header";
import TopContent from "../../components/TopContent/TopContent";
import { WhaleProps } from "../../interfaces";
import animation1 from "../../../assets/video/animation_Slomo.mp4";
import animation2 from "../../../assets/video/humpback_whale.mp4";
import * as Styled from "./Solution.styles";

interface Solution {
  id: number;
  title?: string;
  whales?: WhaleProps[];
}

const windowWidth = Dimensions.get("window").width;

const Solution = () => {
  const navigation = useNavigation<any>();

  const solutions: Solution[] = [
    { id: 1, title: t("solution.firstCard") },
    {
      id: 2,
      whales: [
        {
          name: "Brigite",
          image: whale1,
          species: t("blueWhale"),
          lifeTime: 80,
          video: animation1,
          //colocar video novo aqui
        },
        {
          name: "Dory",
          image: whale2,
          species: t("pilotWhale"),
          lifeTime: 60,
          video: animation1,
        },
        {
          name: "Suzy",
          image: whale3,
          species: t("humpbackWhale"),
          lifeTime: 70,
          video: animation2,
        },
      ],
    },
    { id: 3, title: t("solution.lastCard") },
  ];

  return (
    <Styled.Container>
      <Styled.Background source={solutionBackground} resizeMode="stretch">
        <Header />
        <TopContent
          title={t("solution.title")}
          subtitle={t("solution.subtitle")}
        />
        <Styled.BodyContainer>
          {solutions.map((solution) => (
            <View key={solution.id}>
              {solution.title ? (
                <Styled.Solution
                  activeOpacity={0.7}
                  style={{ width: windowWidth - 120 }}
                >
                  <Styled.SolutionText>{solution.title}</Styled.SolutionText>
                </Styled.Solution>
              ) : (
                <View>
                  <Styled.CicleText>
                    {t("solution.cicleTitle")}
                  </Styled.CicleText>
                  <Styled.WhalesContainer>
                    {solution.whales?.map((whale) => {
                      return (
                        <Styled.Whale
                          key={whale.name}
                          onPress={() =>
                            navigation.navigate("WhaleAnimation", {
                              name: whale.name,
                              species: whale.species,
                              lifeTime: whale.lifeTime,
                              image: whale.image,
                              video: whale.video,
                            })
                          }
                          activeOpacity={0.5}
                        >
                          <Styled.WhaleText>{whale.name}</Styled.WhaleText>
                          <Styled.ImageContainer source={whale.image} />
                        </Styled.Whale>
                      );
                    })}
                  </Styled.WhalesContainer>
                </View>
              )}
            </View>
          ))}
        </Styled.BodyContainer>
      </Styled.Background>
    </Styled.Container>
  );
};

export default Solution;
