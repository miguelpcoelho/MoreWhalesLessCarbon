import { useNavigation } from "@react-navigation/native";
import { t } from "i18next";
import React from "react";
import greenhouseEffect from "../../../assets/images/greenhouse-effect.png";
import problemBackground from "../../../assets/images/problem_background.png";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import Header from "../../components/Header/Header";
import TopContent from "../../components/TopContent/TopContent";
import { ContentBlockProps } from "../../interfaces";
import * as Styled from "./Problem.styles";

const contentBlocks: ContentBlockProps[] = [
  {
    id: 1,
    text: "The amount of CO₂ in the atmosphere has increased more than 20% in less than 40 years, owing largely to human activities, and representing well over 50% of the total increase in atmospheric carbon dioxide since the onset of the industrial revolution (1750)",
  },
  {
    id: 2,
    text: "Greenhouse gases such as carbon dioxide trap heat in the atmosphere. Increasing concentrations of these gases have driven an increase in global temperatures.",
    image: greenhouseEffect,
  },
  {
    id: 3,
    text: "This increase in atmospheric GHGs has a significant impact on Earth's climate because Earth's incoming and outgoing radiation is out of balance --which forces the climate to change.",
  },
];

const Problem = () => {
  const navigation = useNavigation<any>();

  return (
    <Styled.Container>
      <Styled.Background source={problemBackground} resizeMode="stretch">
        <Header />
        <TopContent
          title={t("problem.title")}
          subtitle={t("problem.subtitle")}
        />
        <Styled.ContentBlockContainer>
          {contentBlocks.map((content) => (
            <ContentBlock
              key={content.id}
              id={content.id}
              text={content?.text}
              image={content?.image}
            />
          ))}
        </Styled.ContentBlockContainer>
        <Styled.Button activeOpacity={0.7}>
          <Styled.ButtonText onPress={() => navigation.navigate("Solution")}>
            {t("problem.button")}
          </Styled.ButtonText>
        </Styled.Button>
      </Styled.Background>
    </Styled.Container>
  );
};

export default Problem;
