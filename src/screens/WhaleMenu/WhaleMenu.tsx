import { useNavigation } from "@react-navigation/native";
import { t } from "i18next";
import React from "react";
import { Dimensions, Image } from "react-native";
import arrow1 from "../../../assets/images/arrow1.png";
import arrow2 from "../../../assets/images/arrow2.png";
import solutionBackground from "../../../assets/images/solution_background.png";
import whale from "../../../assets/images/whale.png";
import animation1 from "../../../assets/video/humpback_whale.mp4";
import animation2 from "../../../assets/video/pump.mp4";
import animation3 from "../../../assets/video/deadfall.mp4";
import Header from "../../components/Header/Header";
import TitleSubtitle from "../../components/TitleSubtitle/TitleSubtitle";
import { ActionProps, ProgressBarProps } from "../../interfaces";
import colors from "../../styles/colors";
import * as Styled from "./WhaleMenu.styles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const WhaleMenu = () => {
  const navigation = useNavigation<any>();

  const migrationProgressBarStats: ProgressBarProps[] = [
    {
      title: t("whaleAnimation.progressBar1Title", { name: "Dory" }),
      color: colors.blue,
      progressBarValue: width / 2.36,
      total: 300,
    },
    {
      title: t("whaleAnimation.progressBar2Title"),
      color: colors.green,
      progressBarValue: width / 2.57,
      total: 275,
    },
    {
      title: t("whaleAnimation.progressBar3Title"),
      color: colors.orange,
      progressBarValue: width / 1.26,
      total: 3,
      boldText: t("whaleAnimation.progressBar3BoldTitle"),
      personStats: true,
    },
  ];

  const deadProgressBarStats: ProgressBarProps[] = [
    {
      title: t("whaleAnimation.progressBar1Title", { name: "Dory" }),
      boldText: t("whaleAnimation.progressBar1BoldTitle"),
      color: colors.blue,
      progressBarValue: width / 1.26,
      total: 30,
      deadStats: true,
    },
  ];

  const whaleMenuProps: ActionProps[] = [
    {
      name: t("whaleMenu.firstCard"),
      video: animation1,
      videoDuration: 44000,
      pathTime: 6,
      progressBarStats: migrationProgressBarStats,
    },
    {
      name: t("whaleMenu.secondCard"),
      video: animation2,
      infoCardText: t("whaleAnimation.pumpInfoCard"),
    },
    {
      name: t("whaleMenu.lastCard"),
      video: animation3,
      videoDuration: 20000,
      progressBarStats: deadProgressBarStats,
      infoCardText: t("whaleAnimation.deadInfoCard"),
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
                  videoDuration: item.videoDuration,
                  pathTime: item.pathTime,
                  video: item.video,
                  progressBarStats: item.progressBarStats,
                  infoCardText: item.infoCardText,
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
