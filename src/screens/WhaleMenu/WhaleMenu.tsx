import { useNavigation } from "@react-navigation/native";
import { t } from "i18next";
import React from "react";
import { Dimensions, Image } from "react-native";
import arrow1 from "../../../assets/images/arrow1.png";
import arrow2 from "../../../assets/images/arrow2.png";
import solutionBackground from "../../../assets/images/solution_background.png";
import whale from "../../../assets/images/whale.png";
import Header from "../../components/Header/Header";
import TitleSubtitle from "../../components/TitleSubtitle/TitleSubtitle";
import { ActionProps } from "../../interfaces";
import * as Styled from "./WhaleMenu.styles";
import animation1 from "../../../assets/video/animation_Slomo.mp4";
import animation2 from "../../../assets/video/humpback_whale.mp4";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const WhaleMenu = () => {
  const navigation = useNavigation<any>();

  const whaleMenuProps: ActionProps[] = [
    {
      name: t("whaleMenu.firstCard"),
      lifeTime: 80,
      video: animation1,
      //colocar video novo aqui
      videoDuration: 15000,
      //colocar duracao do video novo aqui
      pathTime: 12,
    },
    {
      name: t("whaleMenu.secondCard"),
      lifeTime: 80,
      video: animation1,
      //colocar video novo aqui
      videoDuration: 15000,
      //colocar duracao do video novo aqui
      pathTime: 12,
    },
    {
      name: t("whaleMenu.lastCard"),
      lifeTime: 80,
      video: animation1,
      //colocar video novo aqui
      videoDuration: 15000,
      //colocar duracao do video novo aqui
      pathTime: 12,
    },
  ];

  return (
    <Styled.Container>
      <Styled.Background source={solutionBackground} resizeMode="stretch">
        <Header />
        <TitleSubtitle
          title={t("whaleMenu.title")}
          subtitle={t("whaleMenu.subtitle")}
        />
        <Styled.TopContent>
          <Styled.SeeInActionContainer>
            <Styled.SeeInActionText>
              {t("whaleMenu.seeInAction")}
            </Styled.SeeInActionText>
            <Image
              source={arrow1}
              style={{
                width: width * 0.12,
                height: width * 0.12,
              }}
            />
          </Styled.SeeInActionContainer>
          <Styled.WhaleContainer
            style={{
              borderRadius: Math.round(width + height) / 2,
              width: width * 0.38,
              height: width * 0.38,
            }}
          >
            <Image
              source={whale}
              style={{
                width: width * 0.3,
                height: width * 0.15,
              }}
            />
          </Styled.WhaleContainer>
          <Styled.AsWhaleContainer>
            <Image
              source={arrow2}
              style={{
                width: width * 0.12,
                height: width * 0.12,
              }}
            />
            <Styled.AsWhaleTextContainer>
              <Styled.AsWhaleText>{t("whaleMenu.asWhale")}</Styled.AsWhaleText>
              <Styled.AsWhaleTextName>Dory</Styled.AsWhaleTextName>
            </Styled.AsWhaleTextContainer>
          </Styled.AsWhaleContainer>
        </Styled.TopContent>
        <Styled.BodyContainer>
          {whaleMenuProps.map((item) => (
            <Styled.WhaleActionContainer
              activeOpacity={0.7}
              style={{ width: width - 120 }}
              key={item.name}
              onPress={() =>
                navigation.navigate("WhaleAnimation", {
                  name: item.name,
                  lifeTime: item.lifeTime,
                  videoDuration: item.videoDuration,
                  pathTime: item.pathTime,
                  video: item.video,
                })
              }
            >
              <Styled.WhaleMenuText>{item.name}</Styled.WhaleMenuText>
            </Styled.WhaleActionContainer>
          ))}
        </Styled.BodyContainer>
      </Styled.Background>
    </Styled.Container>
  );
};

export default WhaleMenu;
